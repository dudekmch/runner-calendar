import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router";
import CreateAccountPage from "./authForm/createAccount/CreateAccountPage";
import LoginPage from "./authForm/login/LoginPage";

const AuthContainer = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Route path="/loginPage">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/createAccount">
            <CreateAccountPage></CreateAccountPage>
          </Route>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
