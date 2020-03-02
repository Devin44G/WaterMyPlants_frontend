import React from 'react';
import './App.css';

import { UserProvider } from './UserContext';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <LoginForm />
      </div>
    </UserProvider>
  );
}

export default App;
