import React from "react";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import SignUp from './components/SignUp';
import { Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
      <Navigation/>
      <Route exact path="/" component={Home} />
        <Route path="/LoginForm" component={LoginForm} />
        <Route path="/SignUp" component={SignUp} />
    </div>
  );
}

export default App;