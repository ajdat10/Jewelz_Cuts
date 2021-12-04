import React from "react";
import { Link } from "react-router-dom";

export default ({ authenticated, currentUser, className, props }) => {
  // console.log(props.currentUser)
  return authenticated && currentUser ? (
    <header className={className}>
      <nav>
        <div className="nav-wrapper  blue darken-4">
          <Link className="nav-active brand-logo center" to="#">
            Welcome Back
          </Link>
          Welcome Back
          {currentUser.name}
          <ul id="nav-mobile" className="right">
            <li>
              <Link className="nav-active" to="/main">
                Questions Asked
              </Link>
            </li>
            <li>
              <Link className="nav-active" to="/profile">
                {props.currentUser.username}
              </Link>
            </li>
            <li>
              <Link
                className="nav-active"
                to="/"
                onClick={() => localStorage.clear}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <div className="nav-wrapper blue darken-4">
          <Link className="nav-active brand-logo center" to="/">
            Jewelz Cuts
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link className="nav-active" to="/login">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="nav-active" to="/register">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
