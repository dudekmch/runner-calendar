import {
    Route,
    Redirect
  } from 'react-router-dom';
import { ICurrentUser } from '../store/auth';
  
  const PrivateRoute = (props : {children: any, user : ICurrentUser, path: string}) => {
    return (
      <Route
        path={props.path}
        render={
          ({ location }) => (
            props.user
              ? (
                props.children
              ) : (
                <Redirect
                  to={{
                    pathname: '/auth/login',
                    state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;