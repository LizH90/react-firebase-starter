import React from "react"
import getFirebase from "../firebase"

const SignOutButton = () => {
  const firebaseInstance = getFirebase()
  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut()
      }
    } catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signOut} type="submit">
          Sign Out
        </button>
      </header>
    </div>
  )
}

export default SignOutButton
