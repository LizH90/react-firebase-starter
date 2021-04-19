import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import Loader from "react-loader-spinner"
import { useAuth } from "../utils/hooks/useAuth"

const PrivateRoute = ({ children, ...rest }) => {
  const userInfo = useAuth()
  const [auth, setAuth] = useState({})

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo])

  if (!auth.currentUser) {
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
  }

  return (
    <Route
      {...rest}
      render={() =>
        auth.currentUser && Object.keys(auth.currentUser).length ? (
          children
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute
