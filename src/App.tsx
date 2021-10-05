import { Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import CreateAccountPage from "./component/auth/authForm/createAccount/CreateAccountPage";
import LoginPage from "./component/auth/authForm/login/LoginPage";

import TrainingTableContainer from "./component/trainingTable/trainingTableContainer/TraingTableContainer";

const App = () => {
  return (
    <>
      <Container>
        <Container>
        <Row>
          <Col></Col>
          <Col>
            <Route path="/login">
            <LoginPage></LoginPage>
            </Route>
            <Route path="/createAccount">
            <CreateAccountPage></CreateAccountPage>
            </Route>
          </Col>
          <Col></Col>
        </Row>
        </Container>
        <Route path="/trainingTable">
        <Row>
          <TrainingTableContainer></TrainingTableContainer>
        </Row>
        </Route>
      </Container>
    </>
  );
};

export default App;
