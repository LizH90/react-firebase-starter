import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/sign-out-button';
import { useAuth } from '../../utils/hooks/useAuth';

const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  const welcomeMessage = auth?.currentUser?.email
    ? `Welcome ${auth?.currentUser?.email}`
    : 'Welcome';

  return (
    <div>
      <div className="message">
        {welcomeMessage}
      </div>
      <div className="page">
        <h1 className="title">
          Homepage
        </h1>
        <SignOutButton />
      </div>
    </div>
  );
};

export default HomePage;
