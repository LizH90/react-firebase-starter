import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../utils/hooks/useInput';
import getFirebase from '../firebase';
import './form.css';

const Form = ({ type }) => {
  const email = useInput('');
  const password = useInput('');
  const firebaseInstance = getFirebase();

  const formDetails = {
    signUp: {
      handler: () => firebaseInstance
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value),
      buttonName: 'Sign Up',
    },
    signIn: {
      handler: () => firebaseInstance
        .auth()
        .signInWithEmailAndPassword(email.value, password.value),
      buttonName: 'Sign In',
    },
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (firebaseInstance) {
        await formDetails[type].handler()
      }
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="form"
      >
        <input placeholder="Email" {...email} className="primaryInput" />
        <input placeholder="Password" type="password" {...password} className="primaryInput" />
        <button type="submit" className="primaryButton submit">
          {formDetails[type].buttonName}
        </button>
      </form>
    </div>
  )
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Form;
