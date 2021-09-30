import { Col, Row } from "react-bootstrap";
import { useSelector, RootStateOrAny } from "react-redux";

import { CheckBoxType } from "../../common/checkbox/CheckBoxModel";
import FilterForm from "../filterForm/FilterForm";
import TrainingTable from "../trainingTable/TrainingTable";
import { ITrainingTableContainerProps } from "./TrainingTableContainerModel";
import { IInterval } from "../../../model/Training";
import StyledContainer from "../../common/container/StyledContainer";
import SummaryContainer from "../summaryRow/SummaryContainer";

const TrainingTableContainer = (props: ITrainingTableContainerProps) => {

  const selectedRows: IInterval[] = useSelector(
    (state: RootStateOrAny) => state.intervalSelectedRow.selectedRows
  );

  return (
    <>
      <StyledContainer>
        <Row>
          <Col>
            <SummaryContainer />
          </Col>
          <Col></Col>
        </Row>
      </StyledContainer>
      <StyledContainer>
        <Row>
          <Col>
            <FilterForm
              checkBoxType={CheckBoxType.CHECKBOX}
              training={props.training}
            ></FilterForm>
          </Col>
        </Row>
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
