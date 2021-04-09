import React from 'react';
import useInput from '../utils/hooks/useInput';
import getFirebase from '../firebase';


const Form = ({type}) => {
  const email = useInput('');
  const password = useInput('');
  const firebaseInstance = getFirebase();

  const formDetails = {
    signUp: {
      handler: () => firebaseInstance.auth().createUserWithEmailAndPassword(email.value, password.value),
      buttonName: 'Sign Up',
      alert: () => alert(`Welcome ${email.value}!`),
    },
    signIn: {
      handler: () => firebaseInstance.auth().signInWithEmailAndPassword(email.value, password.value),
      buttonName: 'Sign In',
      alert: () => alert(`Welcome back ${email.value}!`),
    },
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      if (firebaseInstance) {
        const user = await formDetails[type].handler();
        console.log("user", user)
        formDetails[type].alert();
      }
    } catch (error) {
      console.log('error', error);
      alert(error.message);
    }
  }
  return (
    <div className="App">
    <form onSubmit={(e)=>onSubmitHandler(e)}>
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <button type="submit">{formDetails[type].buttonName}</button>
    </form>
  </div>
  )
};

export default Form;