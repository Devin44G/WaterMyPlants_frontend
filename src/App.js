import React from 'react';
import './App.css';

import { UserProvider } from './UserContext';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={Registration} />
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
