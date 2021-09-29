import { RootStateOrAny, useSelector } from "react-redux";

import {
  calculateAvarageTime,
  calculateAvarageValue,
} from "../../../helpers/CalculateSummaryRowHelper";
import StyledContainer from "../../common/container/StyledContainer";
import { IInterval } from "../../../model/Training";

const SummaryContainer = () => {
  const selectedRows: IInterval[] = useSelector(
    (state: RootStateOrAny) => state.intervalSelectedRow.selectedRows
  );

  const calculateAvaregeIntervalsTime = (): string => {
    const times = selectedRows.map((interval) => interval.time);
    return calculateAvarageTime(times);
  };

  const calculateAvaregeIntervalsDistance = (): string => {
    const distances: number[] = selectedRows.map(
      (interval) => interval.distance
    );
    return calculateAvarageValue(distances, false).toFixed(2);
  };

  const calculateAvaregeIntervalsCalories = (): number => {
    const calories = selectedRows.map((interval) => interval.calories);
    return calculateAvarageValue(calories, true);
  };

  const calculateAvaregeIntervalsMaxHeartRate = (): number => {
    const maxHeartRates = selectedRows.map((interval) => interval.maxHeartRate);
    return calculateAvarageValue(maxHeartRates, true);
  };

  const calculateAvaregeIntervalsPace = (): string => {
    const paces = selectedRows.map((interval) => interval.averagePace);
    return calculateAvarageTime(paces);
  };

  const calculateAvaregeIntervalsAvarageHeartRate = (): number => {
    const avarageHeartRates = selectedRows.map(
      (interval) => interval.averageHeartRate
    );
    return calculateAvarageValue(avarageHeartRates, true);
  };

  return (
    <>
      {selectedRows.length > 0 && (
        <StyledContainer>
          <ul>
            <li>{calculateAvaregeIntervalsTime()}</li>
            <li>{calculateAvaregeIntervalsDistance()}</li>
            <li></li>
            <li>{calculateAvaregeIntervalsCalories()}</li>
            <li>{calculateAvaregeIntervalsMaxHeartRate()}</li>
            <li></li>
            <li>{calculateAvaregeIntervalsPace()}</li>
            <li>{calculateAvaregeIntervalsAvarageHeartRate()}</li>
          </ul>
        </StyledContainer>
      )}
    </>
  );
};

export default SummaryContainer;
