import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'

import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    // Check the cookies for a cookie called "loggedIn"
    return cookies["foo"] ? true : false
}


// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
    )
  }


const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;