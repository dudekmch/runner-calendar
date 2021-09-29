import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { intervalSelectedRowActions } from "../../../store/index";
import { CheckBoxType } from "../../common/checkbox/CheckBoxModel";
import FilterForm from "../filterForm/FilterForm";
import TrainingTable from "../trainingTable/TrainingTable";
import { ITrainingTableContainerProps } from "./TrainingTableContainerModel";
import { IInterval } from "../../../model/Training";
import StyledContainer from "../../common/container/StyledContainer";
import SummaryContainer from "../summaryRow/SummaryContainer";

const TrainingTableContainer = (props: ITrainingTableContainerProps) => {
  const dispatch = useDispatch();
  dispatch(intervalSelectedRowActions.resetSelectedRows());

  return (
    <>
      <StyledContainer>
        <Row>
          <Col>
            <SummaryContainer />
          </Col>
          <Col>
          </Col>
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
            <TrainingTable intervals={props.training.data}></TrainingTable>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default TrainingTableContainer;
