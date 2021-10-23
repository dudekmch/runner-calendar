import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router";

import CreateAccount from "./authForm/createAccount/CreateAccount";
import Login from "./authForm/login/Login";

const AuthContainer = () => {


  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/createAccount">
            <CreateAccount></CreateAccount>
          </Route>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
