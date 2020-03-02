import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';

function App() {

  const [login, setLogin] = useState([]);

  const checkLogin = log => {
    const newLogin = {
      id: Date.now(),
      user: log.user,
      pass: log.pass
    };
    setLogin([...login, newLogin]);
  };

  return (
    <div className="App">
      {/* BUILD APP */}
      <h1>Water my Plants!</h1>
      <LoginForm checkLogin={checkLogin} />
    </div>
  );
}

export default App;