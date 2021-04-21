import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Form from '../../components/form';
import { useAuth } from '../../utils/hooks/useAuth';

const SignIn = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  if (auth.currentUser && Object.keys(auth.currentUser).length) {
    return <Redirect to="/" />
  }

  return (
    <div className="page">
      <h1 className="title">Sign In</h1>
      <Form type="signIn" />
      <Link to="/sign-up" className="primaryLink">
        Don't have an account? Sign up here
      </Link>
    </div>
  );
};

export default SignIn
