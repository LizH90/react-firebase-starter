import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
  const userInfo = useAuth();
  console.log("userInfo", userInfo)
  return (
    <Route {...rest} 
      render = {() =>
        userInfo ? (
          children
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  )
};

export default PrivateRoute;