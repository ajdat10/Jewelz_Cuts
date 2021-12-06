import React, { useState } from "react";
import TextInput from "../components/TextInput.js";
import { __LoginUser } from "../services/UserServices.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile.js";

function SignIn(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);
  let navigate = useNavigate();

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    setFormError(false);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    setFormError(false);
  };

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const loginData = await __LoginUser(email, password)
      props.toggleAuthenticated(true, loginData.user)
      navigate('/profile')
    } catch (error) {
      setFormError(true);
    }
  };
  return (
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
        <button onSubmit={handleSubmit}>Sign In</button>
        {this.state.formError ? <p>Error While Logging In</p> : <p></p>}
      </form>
    </div>
  );
};

export default SignIn
