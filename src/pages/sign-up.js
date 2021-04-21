import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import '../App.css'

const SignUp = () => (
  <div className="App">
    <header className="App-header">
      <h1>Sign Up</h1>
      <Form type="signUp" />
      <Link to="/sign-in">Back to Sign In</Link>
    </header>
  </div>
)

export default SignUp
