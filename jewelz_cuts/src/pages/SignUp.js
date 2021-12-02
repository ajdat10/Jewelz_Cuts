import React, { Component } from "react";
import TextInput from "../components/TextInput.js";
import { __RegisterUser } from "../services/UserServices.js";
import { Link } from "react-router-dom";
// import "../styles/SignUp.css";

export default class Signup extends Component {
  // TODO Integrate Auth
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __RegisterUser(this.state);
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, password, email } = this.state;
    return (
      <div
        className="signup"
        container
        justify="center"
        style={{ textAlign: "center", marginTop: "-300px", padding: "400px" }}
      >
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Name or Nickname your known by:"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            autoComplete="false"
          />
            <TextInput
              placeholder="Your Email"
              name="email"
              value={email}
              type="email"
              onChange={this.handleChange}
              autoComplete="false"
            />
          <TextInput
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            autoComplete="false"
          />

          <button onClick={this.handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
