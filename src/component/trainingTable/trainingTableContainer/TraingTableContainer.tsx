import { Col } from "react-bootstrap";
import { CheckBoxType } from "../../common/checkbox/CheckBoxModel";
import FilterForm from "../filterForm/FilterForm";
import TrainingTable from "../trainingTable/TrainingTable";
import { ITrainingTableContainerProps } from "./TrainingTableContainerModel";

const TrainingTableContainer = (props: ITrainingTableContainerProps) => {

  return (
    <Col>
      <FilterForm
        checkBoxType={CheckBoxType.CHECKBOX}
        training={props.training}
      ></FilterForm>
      <TrainingTable intervals={props.training.data}></TrainingTable>
    </Col>
  );
};

export default TrainingTableContainer
