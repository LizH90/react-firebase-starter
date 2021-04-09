import React from 'react';
import Form from '../components/Form';
import logo from '../logo.svg';
import '../App.css';

const SignUp = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Sign Up</h1>
        <Form type="signUp"/>
      </header>
    </div>
  );
};

export default SignUp;