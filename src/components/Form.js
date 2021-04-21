import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../utils/hooks/useInput'
import getFirebase from '../firebase'

const Form = ({ type }) => {
  const email = useInput('')
  const password = useInput('')
  const firebaseInstance = getFirebase()

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
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (firebaseInstance) {
        await formDetails[type].handler()
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className="App">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input placeholder="Email" {...email} />
        <input placeholder="Password" type="password" {...password} />
        <button type="submit">{formDetails[type].buttonName}</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Form
