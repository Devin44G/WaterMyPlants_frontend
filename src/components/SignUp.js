import React, { useContext } from "react";
import { Ss, Ii, Ll, Main } from './../styles'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../UserContext';

const SignUp = props => {
  const [userCred, setUserCred] = useContext(UserContext);
    userCred.phone_number = parseInt(userCred.phone_number);
    console.log('Context:', userCred);

  const regHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/register', userCred)
      .then(res => {
        props.history.push("/login");
        console.log('Data after login: ', res);
      })
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value
    });
  };

      return (
        <Main>
          <form onSubmit={regHandler}>
            <Ll htmlFor="user">Username</Ll>
            <Ii
              id="user"
              type="text"
              name="username"
              onChange={handleChanges}
              value={userCred.username}
            />
            <Ll htmlFor="pass">Password</Ll>
            <Ii
              id="pass"
              type="text"
              name="password"
              onChange={handleChanges}
              value={userCred.password}
            />
            <Ll htmlFor="phone">Phone Number</Ll>
            <Ii
              id="phone"
              type="number"
              name="phone_number"
              onChange={handleChanges}
              value={userCred.phone_number}
            />
            <Ss type="submit">Sign Up</Ss>
          </form>
        </Main>
      );
    };

export default SignUp;
