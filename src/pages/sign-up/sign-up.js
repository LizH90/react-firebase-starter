import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form';

const SignUp = () => (
  <div className="page">
    <h1 className="title">Sign Up</h1>
    <Form type="signUp" />
    <Link
      to="/sign-in"
      className="primaryLink"
    >
      Back to Sign In
    </Link>
  </div>
);

export default SignUp;
