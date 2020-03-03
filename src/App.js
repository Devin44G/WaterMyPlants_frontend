import React from 'react';
import './App.css';

import { UserProvider } from './UserContext';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import PrivateRoute from './routes/PrivateRoute';
import Test from './components/Test';

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
        <PrivateRoute path="/protected" component={Test} />
      </div>
    </UserProvider>
  );
}

export default App;
