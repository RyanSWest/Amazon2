import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "@material-ui/core";
import { auth } from "./firebase";

function Register({ signUp }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <h1>REGISTER</h1>
      <form type="submit" onSubmit={signUp}>
        <Input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit"> Enter</Button>
      </form>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
