import React, { useContext } from "react";
import { Ss, Ii, Ll, Main } from './../styles'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../UserContext';


const LoginForm = props => {
  const [userCred, setUserCred] = useContext(UserContext);
  console.log('Context:', userCred);

  const loginHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/auth/login', userCred)
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('userID', res.data.id);
        props.history.push('/dashboard');
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
    <form onSubmit={loginHandler}>
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
        type="password"
        name="password"
        onChange={handleChanges}
        value={userCred.password}
      />
      <Ss type="submit">Login</Ss>
    </form>
    </Main>
  );
};

export default LoginForm;
