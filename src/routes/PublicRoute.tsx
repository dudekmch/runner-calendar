import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PublicRoute(props : {children: any, user : any, path:string}) {
    return (
      <Route
        path={props.path}
        render={
          ({ location }) => (
            !props.user ? (
              props.children
            ) : (
              <Redirect
                to={{
                  pathname: '/home',
                  state: { from: location }
                }}
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;