import {Container} from 'react-bootstrap';
import Layout from './component/layaut/Layaut';
import {RootStateOrAny, useSelector} from 'react-redux';
import {ICurrentUser} from './store/auth';
import {Switch} from 'react-router';
import PublicRoute from './routes/PublicRoute';
import Login from './component/auth/authForm/login/Login';
import CreateAccount from './component/auth/authForm/createAccount/CreateAccount';
import PrivateRoute from './routes/PrivateRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';
import ResetPassword from './component/auth/authForm/resetPassword/ResetPassword';

const App = () => {

  const user: ICurrentUser = useSelector(
    (state: RootStateOrAny) => state.authUser.currentUser
  );

  return (
    <Container>
      <Layout>
        <Switch>
          <PublicRoute path='/auth/login' user={user}>
            <Login />
          </PublicRoute>
          <PublicRoute path='/auth/createAccount' user={user}>
            <CreateAccount />
          </PublicRoute>
          <PublicRoute path='/auth/resetPassword' user={user}>
            <ResetPassword />
          </PublicRoute>
          <PrivateRoute
            path="/"
            user={user}
          >
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Container>
  );
};

export default App;
