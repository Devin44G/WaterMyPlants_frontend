import React, { useState } from "react";
import { Ss, Ii, Ll, Main } from './../styles'


const LoginForm = props => {
  console.log("props", props);
  const [log, setLog] = useState({
    user: "",
    pass: ""
  });

  const [login, setLogin] = useState([]);

  const checkLogin = log => {
    const newLogin = {
      id: Date.now(),
      user: log.user,
      pass: log.pass
    };
    setLogin([...login, newLogin]);
  };

  const handleChanges = e => {
    console.log(log);
    setLog({
      ...log,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.checkLogin(log);
    setLog({ user: "", pass: "" });
  };

  

  return (
    <Main>
    <form onSubmit={submitForm}>
      <Ll htmlFor="user">User</Ll>
      <Ii
        id="user"
        type="text"
        name="user"
        onChange={handleChanges}
        value={log.user}
      />
      <Ll htmlFor="pass">Password</Ll>
      <Ii
        id="pass"
        type="text"
        name="pass"
        onChange={handleChanges}
        value={log.pass}
      />
      <Ss type="submit">Login</Ss>
    </form>
    </Main>
  );
};

export default LoginForm;