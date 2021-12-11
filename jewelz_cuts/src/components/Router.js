import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { __CheckSession } from "../services/UserServices.js";
import Nav from "./Nav";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import CreateAppointment from '../pages/CreateAppointment'
function Routers(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     authenticated: false,
  //     currentUser: null,
  //     pageLoading: true,
  //   };
  // }

  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [pageLoading, setPageLoading] = useState(true)

  const history = useHistory();


  useEffect(() => {
    setPageLoading(false)
    verifyTokenValid()
  }, [])



  const toggleAuthenticated = (value, user) => {
    setAuthenticated(value)
    setCurrentUser(user)
  }


  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log("session", session);
        setCurrentUser(session.user)
        setAuthenticated(true)
        history(window.location.pathname)
      } catch (error) {
        setCurrentUser(null)
        setAuthenticated(false)
        localStorage.clear();
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  };

  return (
    <main>
      {pageLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Layout
          {...props}
          currentUser={currentUser}
          authenticated={authenticated}
        >
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  currentUser={currentUser}
                  authenticated={authenticated}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              path="/register"
              component={(props) => (
                <SignUp
                  {...props}
                  toggleAuthenticated={toggleAuthenticated}
                  currentUser={currentUser}
                  authenticated={authenticated}
                />
              )}
            />
            <Route
              path="/login"
              component={() => (
                <SignIn
                  toggleAuthenticated={toggleAuthenticated}
                  currentUser={currentUser}
                  authenticated={authenticated}
                />
              )}
            />
            <ProtectedRoute
              authenticated={authenticated}
              path="/profile"
              component={() => (
                <Profile
                  {...props}
                  toggleAuthenticated={toggleAuthenticated}
                  currentUser={currentUser}
                  authenticated={authenticated}
                />
              )}
            />
            <ProtectedRoute
              authenticated={authenticated}
              path="/create"
              component={(props) => (
                <CreateAppointment
                  currentUser={currentUser}
                  authenticated={authenticated}
                  {...props}
                />
              )}
            />
          </Switch>
        </Layout>
      )}
    </main>
  );
}

export default withRouter(Routers);
