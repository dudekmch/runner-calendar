import { ISummaryRowProps } from "./SummaryRowModel";
import {
  calculateAvarageTime,
  calculateAvarageValue,
} from "../../../helpers/CalculateSummaryRowHelper";

const SummaryRow = (props: ISummaryRowProps) => {
  const calculateAvaregeIntervalsTime = (): string => {
    const times = props.intervals.map((interval) => interval.time);
    return calculateAvarageTime(times);
  };

  const calculateAvaregeIntervalsDistance = (): string => {
    const distances: number[] = props.intervals.map((interval) => interval.distance);
    return calculateAvarageValue(distances, false).toFixed(2);
  };

  const calculateAvaregeIntervalsCalories = (): number => {
    const calories = props.intervals.map((interval) => interval.calories);
    return calculateAvarageValue(calories, true);
  };

  const calculateAvaregeIntervalsMaxHeartRate = (): number => {
    const maxHeartRates = props.intervals.map(
      (interval) => interval.maxHeartRate
    );
    return calculateAvarageValue(maxHeartRates, true);
  };

  const calculateAvaregeIntervalsPace = (): string => {
    const paces = props.intervals.map((interval) => interval.averagePace);
    return calculateAvarageTime(paces);
  };

  const calculateAvaregeIntervalsAvarageHeartRate = (): number => {
    const avarageHeartRates = props.intervals.map(
      (interval) => interval.averageHeartRate
    );
    return calculateAvarageValue(avarageHeartRates, true);
  };

  return (
    <tr>
      <th>{calculateAvaregeIntervalsTime()}</th>
      <th>{calculateAvaregeIntervalsDistance()}</th>
      <th></th>
      <th>{calculateAvaregeIntervalsCalories()}</th>
      <th>{calculateAvaregeIntervalsMaxHeartRate()}</th>
      <th></th>
      <th>{calculateAvaregeIntervalsPace()}</th>
      <th>{calculateAvaregeIntervalsAvarageHeartRate()}</th>
    </tr>
  );
};

export default SummaryRow;
