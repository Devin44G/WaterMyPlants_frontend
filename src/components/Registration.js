import React, { useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PLContext } from '../state/PLContext';


const Ss = styled.button`
  height: 30px;
  background: orange;
  color: black;
  border: 0;
  margin: 5px 10px;
`;

const Ii = styled.input`
  width: 200px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
  border: 1px solid #ff65a3;
  border-radius: 4px;
  `;

const Ll = styled.label`
  margin-bottom: -12px;
  text-align: left;
  width: 200px;
  `;

const Registration = props => {
  const [userCred, setUserCred] = useContext(PLContext);

  const regHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/register', userCred)
      .then(res => {
        props.history.push("/login");
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
    <form onSubmit={regHandler}>
      <Ll htmlFor="user">User</Ll>
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
      <Ss type="submit">Sign Up</Ss>
    </form>
  );
};

export default Registration;
