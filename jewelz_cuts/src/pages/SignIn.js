import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput.js";
import Nav from '../components/Nav.js'
import { __LoginUser } from "../services/UserServices.js";
import Profile from "./Profile.js";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setError] = useState(false)
  const [authenticated, updateAuthenticated] = useState(false)
  const [currentUser, updateUser] = useState(null)

  const toggleAuthenticated = (value, user) => {
    updateAuthenticated(value)
    updateUser(user)
  }
  const navigate = useNavigate()

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    setError(false);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginData = await __LoginUser(email, password)
      toggleAuthenticated(true, loginData.user)
      navigate('/Profile')
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <div
        className="signin flex-col"
        container
        justify="center"
        style={{ textAlign: "center", marginTop: "-300px", padding: "400px" }}
      >
        <form className="flex-col" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Your Email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <TextInput
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <br />
          <button>Sign In</button>
          {formError ? <p>Error While Logging In</p> : <p></p>}

        </form>
      </div>
    </>
  );
};

export default SignIn
