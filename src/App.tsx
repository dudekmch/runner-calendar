import {Container} from 'react-bootstrap';

import TrainingTableContainer from './component/trainingTable/trainingTableContainer/TraingTableContainer';
import AuthContainer from './component/auth/AuthContainer';
import Layout from './component/layaut/Layaut';
import {onAuthStateChanged} from '@firebase/auth';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authActions} from './store/auth';
import {firebaseAuth} from './Firebase';
import {Route, Switch} from 'react-router';
import PageNotFound from './component/common/pageNotFound/PageNotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authUnsubscriber = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(
            authActions.setUser({
              email: user.email,
              token: token,
            })
          );
        });
      } else {
        dispatch(authActions.setUser(null));
      }
    });
    return authUnsubscriber;
  }, []);

  return (
    <Container>
      <Layout>
        <Switch>
          <Route path='/auth/*'>
            <AuthContainer />
          </Route>
          <Route path='/trainingTable'>
            <TrainingTableContainer />
          </Route>
          <Route path='/*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Layout>
    </Container>
  );
};

export default App;
