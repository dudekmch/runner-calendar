import { Container, Row } from "react-bootstrap";

import TrainingTableContainer from "./component/trainingTable/trainingTableContainer/TraingTableContainer";

const App = () => {

  return (
    <Container>
      <Row>
          <TrainingTableContainer></TrainingTableContainer>
      </Row>
    </Container>
  );
};

export default App;
