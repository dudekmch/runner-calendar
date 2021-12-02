import moment from 'moment';
import {useRef} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import StyledContainer from '../../../common/container/StyledContainer';
import {ITrainigSummaryProps} from './TrainingSummaryModel';

const TrainingSummary = (props: ITrainigSummaryProps) => {
  const exerciseDate = useRef<HTMLInputElement>(null);
  const minExerciseDate = moment().subtract(1, 'years').format("yyyy-MM-DDTHH:mm");
  const maxExerciseDate =  moment().format("yyyy-MM-DDTHH:mm");

  const submitSaveTraining = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if(exerciseDate.current){
      const timestamp = moment(exerciseDate.current.value).unix();
      props.saveTrainingHandler(timestamp);
    }
  };

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
           <Form onSubmit={submitSaveTraining}>
              <Form.Group className='mb-3' controlId='formSaveTraining'>
                <Form.Label>Set exercise date:</Form.Label>
                <Form.Control 
                  ref={exerciseDate}
                  required
                  type='date'
                  id='exerciseDate'
                  name='exerciseDate'
                  value={maxExerciseDate}
                  min={minExerciseDate}
                  max={maxExerciseDate}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>Save workout</Button>
            </Form>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default TrainingSummary;
