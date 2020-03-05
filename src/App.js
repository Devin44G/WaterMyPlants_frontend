import React from "react";
import { Route } from 'react-router-dom';
import { UserProvider } from './UserContext';

import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import SignUp from './components/SignUp';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';
import Plant from './components/Plant';
import Community from './components/Community';

import './App.css';

function App() {

  return (
    <UserProvider>
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
        <Route path="/" component={Navigation} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={SignUp} />
        <Route path="/plant/:id" component={Plant} />
        <Route path="/community" component={Community} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </div>
    </UserProvider>
  );
}

export default App;
