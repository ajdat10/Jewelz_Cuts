import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { __CheckSession } from "../services/UserServices.js";
import Nav from "./Nav";
import SignIn from '../pages/SignIn'

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
    this.setState({ authenticated: value, currentUser: user }, () => done());
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
          () => this.props.history.push("/main")
        );
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false });
        localStorage.clear();
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  };

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done());
  };
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<SignIn />}/>
        </Routes>
      </div>
    );
  }
}

export default Routers;
