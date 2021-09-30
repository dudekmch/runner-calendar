import { Col, Row } from "react-bootstrap";
import { useSelector, RootStateOrAny } from "react-redux";

import { CheckBoxType } from "../../common/checkbox/CheckBoxModel";
import FilterForm from "../filterForm/FilterForm";
import TrainingTable from "../trainingTable/TrainingTable";
import HeaderContainer from "../headerContainer/HeaderContainer";
import { ITrainingTableContainerProps } from "./TrainingTableContainerModel";
import { IInterval } from "../../../model/Training";
import StyledContainer from "../../common/container/StyledContainer";

const TrainingTableContainer = (props: ITrainingTableContainerProps) => {
  const selectedRows: IInterval[] = useSelector(
    (state: RootStateOrAny) => state.intervalSelectedRow.selectedRows
  );

  return (
    <>
      {selectedRows.length !== 0 && (
        <HeaderContainer selectedRows={selectedRows} />
      )}
      <StyledContainer>
        <Row>
          <Col>
            <FilterForm
              checkBoxType={CheckBoxType.CHECKBOX}
              training={props.training}
            ></FilterForm>
          </Col>
        </Row>
      </StyledContainer>
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
