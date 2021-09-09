import { Table } from "react-bootstrap";
import { RootStateOrAny, useSelector } from "react-redux";

import { ITrainingTableProps } from "./TrainingTableModel";
import TrainingTableRow from "../trainingTableRow/TrainingTableRow";
import { IInterval } from "../../../model/Training";

const TrainingTable = (props: ITrainingTableProps) => {
  const filters: string[] = useSelector(
    (state: RootStateOrAny) => state.intervalTypesFilter.filters
  );

  let filteredIntervals: IInterval[] = props.intervals;

  const applyFilters = () => {
    if (filters.length !== 0) {
      filteredIntervals = filteredIntervals.filter((row) => {
        return filters.includes(row.type);
      });
    } else {
      filteredIntervals = props.intervals;
    }
  };

  applyFilters();

  const createRows = () => {
    return filteredIntervals.map((item) => <TrainingTableRow row={item} />);
  };

  return (
    <div>
      <Table striped bordered hover>
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
        <tbody>{createRows()}</tbody>
      </Table>
    </div>
  );
};

export default TrainingTable;
