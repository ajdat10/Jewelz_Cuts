import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav= (props) => {
  return props.authenticated && props.currentUser ? (
    <div>
      <nav>
        <div className="nav-wrapper  blue darken-4">
          <Link className="nav-active brand-logo center" to="#">
            Welcome Back
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link className="nav-active" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="nav-active" to="/create">
                Create Appointment
              </Link>
            </li>
            <li>
              <Link
                className="nav-active"
                to="/"
                onClick={() => localStorage.clear()}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  ) : (
    <div>
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
    </div>
  );
};
export default withRouter(Nav)
{/* <li>
  <Link className="nav-active" to="/profile">
    {props.currentUser.name}
  </Link>
</li> */}