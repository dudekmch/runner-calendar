import { Col, Container, Row } from "react-bootstrap";
import CreateAccountPage from "./component/auth/authForm/createAccount/CreateAccountPage";
import LoginPage from "./component/auth/authForm/login/LoginPage";

import TrainingTableContainer from "./component/trainingTable/trainingTableContainer/TraingTableContainer";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <LoginPage></LoginPage>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <CreateAccountPage></CreateAccountPage>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <TrainingTableContainer></TrainingTableContainer>
        </Row>
      </Container>
    </>
  );
};

export default App;
