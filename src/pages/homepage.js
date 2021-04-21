import React, { useEffect, useState } from 'react'
import SignOutButton from '../components/SignOutButton'
import { useAuth } from '../utils/hooks/useAuth'

const HomePage = () => {
  const userInfo = useAuth()
  const [auth, setAuth] = useState({})

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo])

  return (
    <>
      <h1>
        Welcome
        {auth?.currentUser?.email}
      </h1>
      <SignOutButton />
    </>
  )
}

export default HomePage
