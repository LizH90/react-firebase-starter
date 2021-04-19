import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import userContext from '../utils/context/userContext';

const PrivateRoute = ({children, ...rest}) => {
  const userInfo = useContext(userContext);
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