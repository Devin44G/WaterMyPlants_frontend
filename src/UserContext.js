import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [userCred, setUserCred] = useState({
    username: '',
    password: '',
    phone_number: ''
  });
  // const [user, setUser] = useState({
  //   id: '',
  //   username: '',
  //   phone_number: ''
  // });

  return(
    <UserContext.Provider value={[userCred, setUserCred]}>
      {props.children}
    </UserContext.Provider>
  );
};
