import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { axiosWithAuth } from './utils/axiosWithAuth';

export const UserContext = createContext();
export const PlantContext = createContext();

export const UserProvider = props => {
  const [userCred, setUserCred] = useState({
    username: '',
    password: '',
    phone_number: ''
  });
  const [user, setUser] = useState({
    id: '',
    username: '',
    phone_number: ''
  });

  return(
    <UserContext.Provider value={[userCred, setUserCred], [user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const PlantProvider = props => {
  const [plants, setPlants] = useState([]);

  return(
    <PlantContext.Provider value={[plants, setPlants]}>
      {props.children}
    </PlantContext.Provider>
  );
};
