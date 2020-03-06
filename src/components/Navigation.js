import React from "react";
import { Link } from 'react-router-dom'
import { Nav, LinkDiv } from './../styles'


const Navigation = props => {
  const deleteToken = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userID');
    props.history.push('/');
  }

  return (
  <Nav>
    <LinkDiv style={{alignItems:'baseline'}}>
      <a href="https://build-week-water-my-plants-4.github.io/UI/" target="_blank" style={{marginRight:'1rem'}}>Home</a>
      {window.localStorage.getItem('token') && window.localStorage.getItem('userID') ? (
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
