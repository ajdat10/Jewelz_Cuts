import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return ( props.currentUser ? 
      <nav>
        <div className="nav-wrapper  blue darken-4">
          <Link className="nav-active brand-logo center" to="#">Welcome Back</Link>
          <ul id="nav-mobile" className="right">
            <li><Link className="nav-active" to="/" onClick={() => localStorage.clear}>Sign Out</Link>
            </li>
          </ul>
        </div>
      </nav>

   : 

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
    );
};

{/* <li>
  <Link className="nav-active" to="/profile">
    {props.currentUser.name}
  </Link>
</li> */}