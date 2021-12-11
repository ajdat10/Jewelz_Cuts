import React from "react";
import Nav from "./Nav";

 const Layout=({ children, authenticated, currentUser }) =>{
  return (
  <div>
    <Nav
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    {children}
    </div>
  )
 }
  
 export default Layout