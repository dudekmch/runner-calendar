import { ITrainingTableProps } from "./TrainingTableModel";
import { Table } from "react-bootstrap";
import { ITraining } from "../../model/Training";
import TrainingTableRow from "./trainingTableRow/TrainingTableRow";

const TrainingTable = (props: ITrainingTableProps) => {
  console.log(props.training)

  const createRows = (training: ITraining) => {
    if (training && training.data) {
      return props.training.data.map((item) => (
        <TrainingTableRow row={item}/>
      ));
    }
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Czas</th>
            <th>Dystans</th>
            <th>Interwał</th>
            <th>Kalorie</th>
            <th>Tętno maksymalne</th>
            <th>Typ</th>
            <th>Średnie tempo</th>
            <th>Średnie tętno</th>
          </tr>
        </thead>
        <tbody>{createRows(props.training)}</tbody>
      </Table>
    </div>
  );
};

export default TrainingTable;
