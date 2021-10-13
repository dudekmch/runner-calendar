import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, useHistory } from "react-router";

import CreateAccount from "./authForm/createAccount/CreateAccount";
import Login from "./authForm/login/Login";

const AuthContainer = () => {
  const [isCreateAccountSuccess, setCreateAccountSuccess] = useState(false)
  const history = useHistory();


  const onCreateAccountSuccess = () => {
    setCreateAccountSuccess(true)
    history.push("/login");
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Route path="/login">
            <Login isCreatedAccoountSuccessContext={isCreateAccountSuccess}></Login>
          </Route>
          <Route path="/createAccount">
            <CreateAccount onCreateAccountSuccessHandler={onCreateAccountSuccess}></CreateAccount>
          </Route>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
