import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

import {
  calculateAvarageTime,
  calculateAvarageValue,
  calculateSum,
  calculateSumOfTimes,
  FORMAT_PEACE,
  FORMAT_TIME,
} from "../../../../helpers/CalculateSummaryRowHelper";
import StyledContainer from "../../../common/container/StyledContainer";
import { IInterval } from "../../../../model/Training";
import { ISelectedRowsSummaryProps } from "./SelectedRowsSummaryModel";
import { intervalSelectedRowActions } from "../../../../store/index";

const SelectedRowsSummary = (props: ISelectedRowsSummaryProps) => {
  const dispatch = useDispatch();
  
  const selectedRows: IInterval[] = props.selectedRows

  const calculateSumIntervalsTime = (): string => {
    const times = selectedRows.map((interval) => interval.time);
    return calculateSumOfTimes(times, FORMAT_TIME);
  };

  const calculateDistanceSum = (): number => {
    const distances: number[] = selectedRows.map(
      (interval) => interval.distance
    );
    return calculateSum(distances);
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
    return calculateAvarageTime(paces, FORMAT_PEACE);
  };

  const calculateAvaregeIntervalsAvarageHeartRate = (): number => {
    const avarageHeartRates = selectedRows.map(
      (interval) => interval.averageHeartRate
    );
    return calculateAvarageValue(avarageHeartRates, true);
  };

  const restSelectedRowsHandler = () => {
    dispatch(intervalSelectedRowActions.resetSelectedRows())
  }

  return (
    <>
      <StyledContainer>
        <h2>Wyniki dla zaznaczonych</h2>
        {selectedRows.length > 0 && (
          <>
          <Row>
            <Col>
            <ul>
            <li>Czas: {calculateSumIntervalsTime()}</li>
            <li>Dystans: {calculateDistanceSum()}</li>
            <li>Kalorie: {calculateAvaregeIntervalsCalories()}</li>
            <li>Średnie tempo: {calculateAvaregeIntervalsPace()}</li>
            <li>
              Średnie tętno: {calculateAvaregeIntervalsAvarageHeartRate()}
            </li>
            <li>
              Średnie tętno maksymalne: {calculateAvaregeIntervalsMaxHeartRate()}
            </li>
          </ul>
            </Col>
            <Col>
            <Button onClick={restSelectedRowsHandler}>Resetuj zaznaczenia</Button>
            </Col>
          </Row>
          </>
        )}
        {selectedRows.length === 0 && <p>Brak zaznaczonych interwałów</p>}
      </StyledContainer>
    </>
  );
};

export default SelectedRowsSummary;
