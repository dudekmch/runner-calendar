import {Col, Container, Row} from 'react-bootstrap';
import {RootStateOrAny, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ICurrentUser} from '../../store/auth';
import PageNotFound from '../common/pageNotFound/PageNotFound';

import CreateAccount from './authForm/createAccount/CreateAccount';
import Login from './authForm/login/Login';
import ResetPassword from './authForm/resetPassword/ResetPassword';
import Logout from './logout/Logout';

const AuthContainer = () => {
  const user: ICurrentUser = useSelector(
    (state: RootStateOrAny) => state.authUser.currentUser
  );

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Switch>
            
                  <Login></Login>
               
                  <CreateAccount></CreateAccount>
               
                  <ResetPassword></ResetPassword>
                
              
            
            {/* {user && (
              <Route path='/auth/logout'>
                <Logout></Logout>
              </Route>
            )}
            <Route path='/auth/*'>
              <PageNotFound></PageNotFound>
            </Route> */}
          </Switch>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
