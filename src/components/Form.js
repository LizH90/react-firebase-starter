import React, {useState} from 'react';
import useInput from '../utils/hooks/useInput';
import getFirebase from '../firebase';

const Form = () => {
  const email = useInput('');
  const password = useInput('');
  const firebaseInstance = getFirebase();
console.log('process.env.REACT_APP_FIREBASE_API_KEY', process.env)
  const signUp = async(e) => {
    e.preventDefault();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance.auth().createUserWithEmailAndPassword(email.value, password.value);
        console.log("user", user)
        alert(`Welcome ${email.value}!`);
      }
    } catch (error) {
      console.log('error', error);
      alert(error.message);
    }
  }
  return (
    <div className="App">
    <form onSubmit={(e)=>signUp(e)}>
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <button type="submit">Sign up</button>
    </form>
  </div>
  )
};

export default Form;