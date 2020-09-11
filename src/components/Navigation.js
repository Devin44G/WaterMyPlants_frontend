import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Nav, LinkDiv } from './../styles'

import { PLContext } from '../state/PLContext';
import { CLEAN } from '../state/reducers/plReducer';


const Navigation = props => {
  const { dispatch } = useContext(PLContext);
  
  const deleteToken = () => {
    dispatch({ type: CLEAN });
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token');
    props.history.push('/');
  }

  return (
  <Nav>
    <LinkDiv style={{alignItems:'baseline'}}>
      <a href="https://build-week-water-my-plants-4.github.io/UI/" target="_blank" style={{marginRight:'1rem'}}>Home</a>
      {window.localStorage.getItem('token') ? (
        <Link className="navlinks" to="/login" onClick={deleteToken}>Log Out</Link>
      ) : (
        <>
          <Link className="navlinks" to="/login">Login</Link>
          <Link className="navlinks" to="/">Sign Up</Link>
        </>
      )}
    </LinkDiv>
    <div style={{display:"flex",alignItems:"flex-start"}}>
      <h1>Water My Plants</h1>
      <div className="logo"> {/* Image Here */} </div>
    </div>
  </Nav>
  );
}

export default Navigation;
