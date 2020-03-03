import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {

  return(
    <>
      <h2>Hello . . . I'm just a test page!</h2>
      <Link to="/login">Logout</Link>
    </>
  );
}

export default Test;
