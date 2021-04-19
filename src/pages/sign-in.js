import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { useAuth } from '../utils/hooks/useAuth';

const SignIn = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(userInfo);
  }, [userInfo])

  if (auth.currentUser && Object.keys(auth.currentUser).length ) {
    return <Redirect to="/" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign In</h1>
        <Form type="signIn" />
        <Link to='/sign-up'>Don't have an account? Sign Up here</Link>
      </header>
    </div>
  );
};

export default SignIn;