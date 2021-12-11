import React from 'react';
import Nav from '../components/Nav'

export default ({ authenticated,children,currentUser }) => {
    return (
      <>
        <Nav authenticated={authenticated} currentUser={currentUser} />
        {children}
      </>
    );
}