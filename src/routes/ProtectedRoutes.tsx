import {Route, Switch} from 'react-router-dom';
import routes from './routes'; // Route list

const ProtectedRoutes = () => {
  return (
    <Switch>
      {routes.map(({component, path, exact}) => (
        <Route path={`/${path}`} key={path} exact={exact}>
            {component}
        </Route>
      ))}
    </Switch>
  );
};

export default ProtectedRoutes;
