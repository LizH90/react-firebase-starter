import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import HomePage from './pages/homepage';
import getFirebase from './firebase';
import userContext from './utils/context/userContext';
import PrivateRoute from './components/PrivateRoute';
const firebase = getFirebase();

function App() {
  const [currentUser, setCurrentUser] = useState({email: ''});
  useEffect(() => {
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser({ email: authUser.email })
        } else {
          setCurrentUser(null)
        }
      });
    }
  }, []);
  return (
    <Router>
      <Switch>
        <userContext.Provider value={currentUser}>
          <PrivateRoute exact path='/'>
            <HomePage/>
          </PrivateRoute>
          <Route exact path='/sign-up'>
            <SignUp/>
          </Route>
          <Route exact path='/sign-in'>
            <SignIn/>
          </Route>
        </userContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
