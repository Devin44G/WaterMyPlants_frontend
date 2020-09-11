import React, { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Ss, Ii, Ll, Main } from './../styles'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PLContext } from '../state/PLContext';
import { useForm } from 'react-hook-form'


const LoginForm = props => {
  // const { dispatch } = useContext(PLContext);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register } = useForm()

  const loginHandler = data => {
    setIsLoading(true);
    axiosWithAuth()
      .post('/api/auth/login', data)
      .then( res => {
        window.localStorage.setItem('user', JSON.stringify(res.data));
        window.localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      })
      .catch(err => console.log(err));

      setIsLoading(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }));

  const classes = useStyles();

  return (
    <Main>
      <form onSubmit={handleSubmit(loginHandler)}>
        <h2 style={{textAlign:'left'}}>Login:</h2>
        <Ii
          type="text"
          name="username"
          placeholder="Username"
          ref={register({ required: true })}
        />
        <Ii
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        <Ss type="submit" className={classes.root}>{!isLoading ? 'Login' : <CircularProgress style={{'color':'green'}} />}</Ss>
      </form>
    </Main>
  );
};

export default LoginForm;
