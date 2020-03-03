import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { axiosWithAuth } from './utils/axiosWithAuth';

export const UserContext = createContext();

export const UserProvider = props => {
  const [userCred, setUserCred] = useState({
    username: '',
    password: '',
    phone_number: ''
  });
  const id = localStorage.getItem('userID');
    console.log('User ID: ', id);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        console.log('Data from useEffect: ', res.data);
        setUser(res.data);
      })
      .catch(err => `Error of type: ${err} has been thrown`);
  }, []);

  return(
    <UserContext.Provider value={[userCred, setUserCred], [user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
