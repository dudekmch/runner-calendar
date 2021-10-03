import StyledContainer from "../../../common/container/StyledContainer";
import { ITrainigSummaryProps } from "./TrainingSummaryModel";

const TrainingSummary = (props: ITrainigSummaryProps) => {
  return (
    <>
      <StyledContainer>
        <h2>Podsumowanie</h2>
        {props.summaryRow && (
          <ul>
            <li>Czas: {props.summaryRow?.time}</li>
            <li>Dystans: {props.summaryRow?.distance}</li>
            <li>Kalorie: {props.summaryRow?.calories}</li>
            <li>Średnie tempo: {props.summaryRow?.averagePace}</li>
            <li>Średnie tętno: {props.summaryRow?.averageHeartRate}</li>
            <li>Średnie tętno maksymalne:{props.summaryRow?.maxHeartRate}</li>
          </ul>
        )}
        {!props.summaryRow && <p>Brak podsumowania</p>}
      </StyledContainer>
    </>
  );
};

export default TrainingSummary;
