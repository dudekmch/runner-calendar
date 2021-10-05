import { Button, Col, Row } from "react-bootstrap";
import StyledContainer from "../../../common/container/StyledContainer";
import { ITrainigSummaryProps } from "./TrainingSummaryModel";

const TrainingSummary = (props: ITrainigSummaryProps) => {
  return (
    <>
      <StyledContainer>
        <h2>Summary</h2>
        <Row>
            <Col>
        {props.summaryRow && (
          <ul>
            <li>Time: {props.summaryRow?.time}</li>
            <li>Distance: {props.summaryRow?.distance}</li>
            <li>Calories: {props.summaryRow?.calories}</li>
            <li>Pace: {props.summaryRow?.averagePace}</li>
            <li>Avg. heartrate: {props.summaryRow?.averageHeartRate}</li>
            <li>Avg. max heartrate:{props.summaryRow?.maxHeartRate}</li>
          </ul>
        )}
        {!props.summaryRow && <p>Brak podsumowania</p>}
        </Col>
        <Col>
        <Button>Save workout</Button>
        {/* <Button variant="danger">Usuń trening</Button> */}
        </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default TrainingSummary;
