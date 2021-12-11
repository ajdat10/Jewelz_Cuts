import React from "react";
import Nav from '../components/Nav.js'
export default function Home(props){
  return props.currentUser ?(
    <div>
    <h1>signed in</h1>
    </div>
  ): (
    <h1>Sign up</h1>
  )
};
