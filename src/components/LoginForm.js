import React, { useContext, useState } from "react";
import { Ss, Ii, Ll, Main } from './../styles'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PLContext } from '../state/PLContext';


const LoginForm = props => {
  const { dispatch } = useContext(PLContext);
  const [isLoading, setIsLoading] = useState(false);
  // console.log('Context:', userCred);

  const loginHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    // axiosWithAuth()
    //   .post('/api/auth/login', userCred)
    //   .then(res => {
    //     window.localStorage.setItem('userID', res.data.id);
    //     window.localStorage.setItem('token', res.data.token);
    //     props.history.push('/dashboard');
    //     setIsLoading(false);
    //     console.log('Data after login: ', res);
    //   })
    //   .catch(err => console.log(err));
  };

  const handleChanges = e => {
    // setUserCred({
    //   ...userCred,
    //   [e.target.name]: e.target.value
    // });
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
        // value={userCred.username}
      />
      <Ll htmlFor="pass">Password</Ll>
      <Ii
        id="pass"
        type="password"
        name="password"
        onChange={handleChanges}
        // value={userCred.password}
      />
      <Ss type="submit">{!isLoading ? 'Login' : 'Loading . . .'}</Ss>
    </form>
    </Main>
  );
};

export default LoginForm;
