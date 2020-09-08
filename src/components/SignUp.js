import React, { useContext, useEffect } from "react";
import { Ss, Ii, Ll, Main } from './../styles'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PLContext } from '../state/PLContext';
import { GET_USER } from '../state/reducers/plReducer';
import { useForm } from 'react-hook-form'

const SignUp = props => {
  const { data, dispatch } = useContext(PLContext);
  useEffect(() => {
    dispatch({ type: 'DEFAULT' });
  }, []);
  console.log('Context:', data);

  const regHandler = () => {
    // e.preventDefault();
    // axiosWithAuth()
    //   .post('/api/auth/register', userCred)
    //   .then(res => {
    //     props.history.push("/login");
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

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data  => { console.log(data) }

      return (
        <Main>
          Hello
          <button onClick={() => {dispatch({ type: GET_USER, payload: 'John' })}}>click me</button>
          <form onSubmit={handleSubmit(regHandler)}>
            <Ll htmlFor="user">Username</Ll>
            <Ii
              id="user"
              type="text"
              name="username"
              onChange={handleChanges}
              // value={userCred.userData.username}
              ref={register({ required: true })}
            />
            {errors.username && <span>Username field is required</span>}
            {/* <Ll htmlFor="pass">Password</Ll>
              <Ii
              id="pass"
              type="text"
              name="password"
              onChange={handleChanges}
              value={userCred.password}
              ref={register({ required: true })}
              />
            {errors.password && <span>Password is required</span>} */}
            <Ss type="submit">Sign Up</Ss>
          </form>
        </Main>
      );
    };

export default SignUp;
