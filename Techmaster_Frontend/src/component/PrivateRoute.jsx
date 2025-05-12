import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.jsx';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to="/sign-in" />
      }
    />
  );
}
