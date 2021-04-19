import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import HomePage from './pages/homepage';
import PrivateRoute from './components/PrivateRoute';
import { ProvideAuth } from './utils/hooks/useAuth';

function App() {

  return (
    <Router>
      <Switch>
        <ProvideAuth>
          <Route exact path='/sign-up'>
            <SignUp/>
          </Route>
          <Route exact path='/sign-in'>
            <SignIn/>
          </Route>
          <PrivateRoute exact path='/'>
            <HomePage/>
          </PrivateRoute>
        </ProvideAuth>
      </Switch>
    </Router>
  );
}

export default App;
