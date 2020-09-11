import React, { useContext } from "react";
import { Ss, Ii, Ll, Main } from './../styles'
import { PLContext } from '../state/PLContext';
import { ADD_USER } from '../state/reducers/plReducer';
import { useForm } from 'react-hook-form'

const SignUp = props => {
  const { data, dispatch } = useContext(PLContext);

  const regHandler = data => {
    dispatch({ type: ADD_USER, payload: data });
    console.log('Form', data);
    props.history.push('/login')
  };

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

      return (
        <Main>
          <form onSubmit={handleSubmit(regHandler)}>
            <h2 style={{textAlign:'left'}}>Registration:</h2>
            <Ii
              type="text"
              name="username"
              placeholder="Create Username"
              ref={register({ required: true })}
            />
            {errors.username && <span>{errors.username.message}</span>}
            <Ii
              type="password"
              name="password"
              placeholder="Create Password"
              ref={register({
                required: true,
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <Ii
              type="password"
              name="confirmPass"
              placeholder="Confirm Password"
              ref={register({
                required: true,
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                },
                validate: value =>
                  value === watch('password') || "Passwords don't match"
              })}
            />
            {errors.confirmPass && <span>{errors.confirmPass.message}</span>}
            <Ss type="submit">Sign Up</Ss>
          </form>
        </Main>
      );
    };

export default SignUp;
