import { Col, Row } from "react-bootstrap";
import { useSelector, RootStateOrAny } from "react-redux";

import { CheckBoxType } from "../../common/checkbox/CheckBoxModel";
import FilterForm from "../filterFormContainer/FilterForm";
import TrainingTable from "../trainingTable/TrainingTable";
import HeaderContainer from "../headerContainer/HeaderContainer";
import { ITrainingTableContainerProps } from "./TrainingTableContainerModel";
import { IInterval } from "../../../model/Training";
import StyledContainer from "../../common/container/StyledContainer";

const TrainingTableContainer = (props: ITrainingTableContainerProps) => {
  const selectedRows: IInterval[] = useSelector(
    (state: RootStateOrAny) => state.intervalSelectedRow.selectedRows
  );

  const getDistinctIntervalTypes = (): Set<string> => {
    const types = new Set<string>();
    props.training.data
      .filter((interval) => interval.type !== undefined)
      .forEach((interval) => types.add(interval.type));
    return types;
  };

  return (
    <>
      <HeaderContainer
        selectedRows={selectedRows}
        allRows={props.training.data}
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
        <Row>
          <Col>
            <TrainingTable
              intervals={props.training.data}
              selectedIntervalIds={selectedRows.map((row: IInterval) => row.id)}
            ></TrainingTable>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default TrainingTableContainer;
