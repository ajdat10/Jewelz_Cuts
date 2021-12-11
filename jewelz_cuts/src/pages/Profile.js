import React, { useState, useEffect } from "react";
// import Card from '../components/Card'
import { __DeleteAppointment } from "../services/AppointmentServices";
import { __GetProfile } from "../services/UserServices";
import { __CheckSession } from "../services/UserServices.js";

import Nav from "../components/Nav.js";

export default ( props ) => {

  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);



  useEffect(() => {
    setPageLoading(false);
    verifyTokenValid();
  }, []);

  const toggleAuthenticated = (value, user) => {
    setAuthenticated(value);
    setCurrentUser(user);
  };
  
  const getAppointments = async () => {
    try {
      console.log(this.props);
      const profileData = await __GetProfile(this.props.currentUser._id);
      this.setState({ appointments: profileData.appointments });
    } catch (error) {
      this.setState({ postFetchError: true });
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const appointmentsToKeep = this.state.posts.filter(
        (appointment) => appointment._id !== id
      );
      this.setState({ appointments: appointmentsToKeep });
      await __DeleteAppointment(id);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log("session", session);
        setCurrentUser(session.user);
        setAuthenticated(true);
        
      } catch (error) {
        setCurrentUser(null);
        setAuthenticated(false);
        localStorage.clear();
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  };

  return (
    <div className="profile">
      <h1>Hi, {props.currentUser.name}</h1>
      {/* <div>
          {this.state.posts.length ? (
            <div className="post-content wrapper flex-row">
              {this.state.posts.map((post) => (
                <div key={post._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/posts/${post._id}`)
                    }
                  >
                    <div className="mask flex-col">
                      <div className="card-content">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                      </div>
                    </div>
                    <img src={post.image_url} alt="sf" />
                  </Card>
                  <div className="flex-row button-wrapper">
                    <button
                      onClick={() =>
                        this.props.history.push(`/edit/${post._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => this.deletePost(post._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No Posts</div>
          )}
        </div> */}
    </div>
  );
}
