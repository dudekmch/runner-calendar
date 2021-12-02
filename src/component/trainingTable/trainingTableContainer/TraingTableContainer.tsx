import {Col, Container, Row} from 'react-bootstrap';
import {useSelector, RootStateOrAny} from 'react-redux';
import {useState} from 'react';

import {CheckBoxType} from '../../common/checkbox/CheckBoxModel';
import FilterForm from '../filterFormContainer/FilterForm';
import TrainingTable from '../trainingTable/TrainingTable';
import HeaderContainer from '../headerContainer/HeaderContainer';
import {IInterval, ITraining} from '../../../model/Training';
import StyledContainer from '../../common/container/StyledContainer';
import {saveTraining} from '../../../service/TrainingService';
import {ICurrentUser} from '../../../store/auth';

const TrainingTableContainer = () => {
  const [training, setTrainig] = useState({} as ITraining);
  const [isTrainingSet, setTariningSet] = useState(false);

  const selectedRows: IInterval[] = useSelector(
    (state: RootStateOrAny) => state.intervalSelectedRow.selectedRows
  );

  const user: ICurrentUser = useSelector(
    (state: RootStateOrAny) => state.authUser.currentUser
  );

  const onFileLoaded = (training: ITraining) => {
    setTrainig(training);
    setTariningSet(true);
  };

  const onFileRemove = () => {
    setTrainig({} as ITraining);
    setTariningSet(false);
  };

  const getDistinctIntervalTypes = (): Set<string> => {
    const types = new Set<string>();
    training.data
      .filter((interval) => interval.type !== undefined)
      .forEach((interval) => types.add(interval.type));
    return types;
  };

  const saveTrainingHandler = (exerciseTimeStamp: number) => {
    if (user.id) {
      saveTraining(training, user.id, exerciseTimeStamp);
    }
  };

  return (
    <Container>
      <HeaderContainer
        selectedRows={selectedRows}
        allRows={training.data}
        fileLoadedHandler={onFileLoaded}
        isTrainingSet={isTrainingSet}
        fileRemoveHandler={onFileRemove}
        saveTrainingHandler={saveTrainingHandler}
      />
      {getDistinctIntervalTypes.length !== 0 && (
        <StyledContainer>
          <Row>
            <Col>
              <FilterForm
                checkBoxType={CheckBoxType.CHECKBOX}
                distinctIntervalTypes={getDistinctIntervalTypes()}
              ></FilterForm>
            </Col>
          </Row>
        </StyledContainer>
      )}
      <StyledContainer>
        {isTrainingSet && (
          <Row>
            <Col>
              <TrainingTable
                intervals={training.data}
                selectedIntervalIds={selectedRows.map(
                  (row: IInterval) => row.id
                )}
              ></TrainingTable>
            </Col>
          </Row>
        )}
        {!isTrainingSet && (
          <h2 style={{textAlign: 'center'}}>Load *.csv file</h2>
        )}
      </StyledContainer>
    </Container>
  );
};

export default TrainingTableContainer;
