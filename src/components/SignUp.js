import React, { useContext } from "react";
import { Ss, Ii, Ll, Main } from './../styles'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { UserContext } from '../UserContext';
import { useForm } from 'react-hook-form'

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

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data  => { console.log(data) }

      return (
        <Main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Ll htmlFor="user">Username</Ll>
            <Ii
              id="user"
              type="text"
              name="username"
              onChange={handleChanges}
              value={userCred.username}
              ref={register({ required: true })}
            />
            {errors.username && <span>Username field is required</span>}
            <Ll htmlFor="pass">Password</Ll>
            <Ii
              id="pass"
              type="text"
              name="password"
              onChange={handleChanges}
              value={userCred.password}
              ref={register({ required: true })}
            />
            {errors.password && <span>Password is required</span>}
            <Ll htmlFor="phone">Phone Number</Ll>
            <Ii
              id="phone"
              type="number"
              name="phone_number"
              onChange={handleChanges}
              value={userCred.phone_number}
              ref={register({ required: true })}
            />
            {errors.phone_number && <span>Phone is required</span>}
            <Ss type="submit">Sign Up</Ss>
          </form>
        </Main>
      );
    };

export default SignUp;
