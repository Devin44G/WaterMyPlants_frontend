import React, { useState } from "react";
import { Ss, Ii, Ll, Main } from './../styles'

const SignUp = props => {
    console.log("props", props);
    const [log, setLog] = useState({
      user: "",
      email: "",
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
        setLog({ user: "", email: "", pass: "" });
      };
    
      return (
        <Main>
        <form onSubmit={submitForm}>
          <Ll htmlFor="user">Username</Ll>
          <Ii
            id="user"
            type="text"
            name="user"
            onChange={handleChanges}
            value={log.user}
          />
          <Ll htmlFor="email">Phone</Ll>
          <Ii
            id="email"
            type="text"
            name="email"
            onChange={handleChanges}
            value={log.email}
          />
          <Ll htmlFor="pass">Password</Ll>
          <Ii
            id="pass"
            type="text"
            name="pass"
            onChange={handleChanges}
            value={log.pass}
          />
          <Ss type="submit">Sign Up</Ss>
        </form>
        </Main>
      );
    };

export default SignUp;