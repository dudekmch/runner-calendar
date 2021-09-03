import { ITrainingTableRowProps } from "./TrainingTableRowModel";
import { useState } from "react";
import styles from "./TrainingTableRow.module.css"

const TrainingTableRow = (props: ITrainingTableRowProps) => {

    const [selected, setSelected] = useState(false)

    console.log(selected)

    const onClickHandler = () => {
        setSelected((prevState) => {
            return !prevState
        })
    }

  return (
    <tr
      onClick={onClickHandler}
      key={props.row.id}
      className={`${selected && styles['selected-row']}`}
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
