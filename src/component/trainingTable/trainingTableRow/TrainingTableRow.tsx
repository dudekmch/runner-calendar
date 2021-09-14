import { useDispatch, RootStateOrAny, useSelector } from "react-redux";

import { IInterval } from "../../../model/Training";
import { intervalSelectedRowActions } from "../../../store/index";
import { ITrainingTableRowProps } from "./TrainingTableRowModel";
import styles from "./TrainingTableRow.module.css";

const TrainingTableRow = (props: ITrainingTableRowProps) => {
  const dispatch = useDispatch();

  const selectedRows: IInterval[] = useSelector(
    (state: RootStateOrAny) => state.intervalSelectedRow.selectedRows
  );

  const onClickHandler = () => {
    dispatch(intervalSelectedRowActions.rowHandle(props.row));
  };

  const isRowSelected = (): boolean => {
    return selectedRows.filter(row => row.id === props.row.id).length > 0
  }

  return (
    <tr
      onClick={onClickHandler}
      key={props.row.id}
      className={`${isRowSelected() && styles["selected-row"]}`}
    >
      <td>{props.row.time}</td>
      <td>{props.row.distance}</td>
      <td>{props.row.intervalNumber}</td>
      <td>{props.row.calories}</td>
      <td>{props.row.maxHeartRate}</td>
      <td>{props.row.type}</td>
      <td>{props.row.averagePace}</td>
      <td>{props.row.averageHeartRate}</td>
    </tr>
  );
};

export default TrainingTableRow;
