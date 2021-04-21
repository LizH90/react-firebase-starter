import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';
import getFirebase from '../../firebase';

const firebase = getFirebase();

const authContext = createContext();

/* A hook to rerender child component if auth status changes */
export const useAuth = () => useContext(authContext);

const useProvideAuth = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setCurrentUser({ email: authUser.email })
      } else {
        setCurrentUser({})
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    currentUser,
  }
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
};

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
