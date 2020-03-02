import React from 'react';
import './App.css';

import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">

      </div>
    </UserProvider>
  );
}

export default App;
