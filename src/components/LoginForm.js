import React, { useState } from "react";
import styled from "styled-components";
const Ss = styled.button`
  height: 30px;
  background: orange;
  color: black;
  border: 0;
  margin: 5px 10px;
`;

const Ii = styled.input`
  width: 200px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;  
  border: 1px solid #ff65a3;
  border-radius: 4px;
  `;

  const Ll = styled.label`
  margin-bottom: -12px;
  text-align: left;
  width: 200px;
  `;

const LoginForm = props => {
  console.log("props", props);
  const [log, setLog] = useState({
    user: "",
    pass: ""
  });

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
  );
};

export default LoginForm;