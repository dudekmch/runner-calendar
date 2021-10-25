import {Container} from 'react-bootstrap';
import Layout from './component/layaut/Layaut';
import {onAuthStateChanged} from '@firebase/auth';
import {useEffect} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {authActions, ICurrentUser} from './store/auth';
import {firebaseAuth} from './Firebase';
import {Switch, useHistory} from 'react-router';
import PublicRoute from './routes/PublicRoute';
import Login from './component/auth/authForm/login/Login';
import CreateAccount from './component/auth/authForm/createAccount/CreateAccount';
import PrivateRoute from './routes/PrivateRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';
import ResetPassword from './component/auth/authForm/resetPassword/ResetPassword';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user: ICurrentUser = useSelector(
    (state: RootStateOrAny) => state.authUser.currentUser
  );

  useEffect(() => {
    const authUnsubscriber = onAuthStateChanged(firebaseAuth, (user) => {
      console.log('USER subscriber ', user);
      if (user) {
        user.getIdToken().then((token) => {
          console.log('TOKEN ', token);
          dispatch(
            authActions.setUser({
              email: user.email,
              token: token,
            })
          );
        });
      } else {
        console.log('logout')
        history.push('/auth/login');
        dispatch(authActions.setUser(null));
      }
    });
    return authUnsubscriber;
  }, [history]);

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
