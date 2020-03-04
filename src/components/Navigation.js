import React from "react";
import { Link } from 'react-router-dom'
import { Nav, LinkDiv } from './../styles'


export default function Navigation() {
  return (
  <Nav><LinkDiv>
    <Link className="navlinks" to="/">Sign Up</Link>
    <Link className="navlinks" to="/login">Login</Link>
  </LinkDiv>
    <div style={{display:"flex",alignItems:"baseline"}}><h1>Water My Plants</h1>
      <img src={require('./../img/wmp.jpg')} alt="WMP Logo"/>
    </div>
  </Nav>
  );
}
