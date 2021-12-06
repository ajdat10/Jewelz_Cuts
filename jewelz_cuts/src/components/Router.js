import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { __CheckSession } from "../services/UserServices.js";
import Nav from "./Nav";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";

class Routers extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true,
    };
  }
  verifyTokenValid = async () => {};

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user });
  };

  componentDidMount() {
    //invoke verifyTokenValid request
    this.verifyTokenValid();
    this.setState({ pageLoading: false });
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log("session", session);
        this.setState(
          {
            currentUser: session.user,
            authenticated: true,
          },
          () => this.props.history.push(window.location.pathname)
        );
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false });
        localStorage.clear();
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  };

  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/login" element={
                  <SignIn
                    currentUser={this.state.currentUser}
                    authenticated={this.state.authenticated}
                    toggleAuthenticated={this.toggleAuthenticated}
                  />
                }
              />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        )}
      </main>
    );
  }
}

export default Routers;
