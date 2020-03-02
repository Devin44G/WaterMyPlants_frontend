import React from "react";
import { Link } from 'react-router-dom'
import { Nav } from './../styles'


export default function Navigation() {
  return (
  <Nav>
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/LoginForm">Login</Link>
        <Link to="/">Home</Link>
        <h1>Water My Plants</h1>
        <img src={require('./../img/wmp.jpg')}/>
  </Nav>
  );
}