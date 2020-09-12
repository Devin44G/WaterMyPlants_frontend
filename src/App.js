import React from "react";
import { Route } from 'react-router-dom';
import { Provider } from './state/PLContext';

import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Plant from './components/Plant';
import Community from './components/Community';

import './index.css';

function App() {

  return (
    <Provider>
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>
        <Route path="/" component={Navigation} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={SignUp} />
        <Route path="/plant/:id" component={Plant} />
        <Route path="/community" component={Community} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Provider>
  );
}

export default App;
