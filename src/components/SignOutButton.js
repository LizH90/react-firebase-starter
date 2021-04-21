import React from 'react'
import getFirebase from '../firebase'

const SignOutButton = () => {
  const firebaseInstance = getFirebase()
  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut()
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <button onClick={signOut} type="submit">
      Sign Out
    </button>
  )
}

export default SignOutButton
