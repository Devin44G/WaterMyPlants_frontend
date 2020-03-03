import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../UserContext';

const Test = props => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/plants')
      .then(res => {
        console.log('Plants: ', res.data);
      });
  }, []);

  return(
    <>
      <h2>Hello, my name is "{user.username}" . . . I'm just a test page!</h2>
      <Link to="/login">Logout</Link>
    </>
  );
}

export default Test;
