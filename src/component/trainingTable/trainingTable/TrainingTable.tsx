import { Table } from "react-bootstrap";
import { RootStateOrAny, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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

  const isRowSelected = (row: IInterval): boolean => {
    return props.selectedIntervalIds.includes(row.id);
  };

  const createRows = () => {
    return filteredIntervals.map((item) => (
      <TrainingTableRow
        row={item}
        key={uuidv4()}
        isSelected={isRowSelected(item)}
      />
    ));
  };

  applyFilters();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Time</th>
            <th>Distance</th>
            <th>Interval</th>
            <th>Calories</th>
            <th>Max heartrate</th>
            <th>Type</th>
            <th>Pace</th>
            <th>Avg. heartrate</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </Table>
    </div>
  );
};

export default TrainingTable;
