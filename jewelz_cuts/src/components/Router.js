import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { __CheckSession } from "../services/UserServices.js";
import Nav from "./Nav";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import Layout from "../pages/Layout";

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
        // useNavigate(window.location.pathname)
      } catch (error) {
        setCurrentUser(null)
        setAuthenticated(false)
        localStorage.clear()
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
          <Layout {...props}
            currentUser={currentUser}
            authenticated={authenticated}
          >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/login" element={
                  <SignIn
                    currentUser={currentUser}
                    authenticated={authenticated}
                    toggleAuthenticated={toggleAuthenticated}
                  />
                }
              />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>

        )}
    </main>
  );
}

export default Routers;
