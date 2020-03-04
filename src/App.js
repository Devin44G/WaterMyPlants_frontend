import React from "react";
import { Route } from 'react-router-dom';
import { UserProvider } from './UserContext';

import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import SignUp from './components/SignUp';
import Registration from './components/Registration';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {

  return (
    <UserProvider>
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
        <Navigation/>
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={SignUp} />
        {/* <PrivateRoute exact path="/dashboard" />
            <PrivateRoute exact path="/plant/:id" />
            <PrivateRoute exact path="/add-plant" />
        <PrivateRoute exact path="/edit-plant/:id" /> */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </div>
    </UserProvider>
  );
}

export default App;
