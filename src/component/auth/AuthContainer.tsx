import {Col, Container, Row} from 'react-bootstrap';
import {Switch} from 'react-router';


import CreateAccount from './authForm/createAccount/CreateAccount';
import Login from './authForm/login/Login';
import ResetPassword from './authForm/resetPassword/ResetPassword';

const AuthContainer = () => {

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Switch>
            <Login></Login>
            <CreateAccount></CreateAccount>
            <ResetPassword></ResetPassword>
          </Switch>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
