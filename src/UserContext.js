import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    phone_number: ''
  });

  return(
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
