import React from "react";
import { Link } from 'react-router-dom'
import { Nav, LinkDiv } from './../styles'


export default function Navigation() {
  return (
  <Nav><LinkDiv>
        <Link class="navlinks" to="/SignUp">Sign Up</Link>
        <Link class="navlinks" to="/LoginForm">Login</Link>
        <Link class="navlinks" to="/">Home</Link>
      </LinkDiv>
        <div style={{display:"flex",alignItems:"baseline"}}><h1>Water My Plants</h1>
        <img src={require('./../img/wmp.jpg')}/>
        </div>
  </Nav>
  );
}