import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import HomePage from './pages/homepage';
import getFirebase from './firebase';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email)
        }
      });
    }
  }, []);

  console.log('currentUser', currentUser)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path='/sign-up'>
          <SignUp/>
        </Route>
        <Route exact path='/sign-in'>
          <SignIn/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
