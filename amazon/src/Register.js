import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Input, Button } from "@material-ui/core";
import { auth } from "./firebase";
import {UserContext, PasswordContext} from './contexts/userContext';
import{useHistory} from 'react-router-dom';

function Register({ signUp }) {
  const [username, setUsername] = useState("");
  
  const { email, setEmail}= useContext(UserContext)
  const {password, setPassword}= useContext(PasswordContext)

  const history = useHistory()

  const register = (e)=> {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth=> {
        history.push('/');
        let user = localStorage.setItem('user', email)


        console.log("REGISTER WORKS!!!")

    })
    .catch((err)=> {
        alert(err.message);
    })
    
}

  return (
    <Container>
              <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />

      <Content> 
      <h1>Create account</h1>
      <form type="submit" onSubmit={signUp}>
        <h5>Your Name</h5>
        <Input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h5>Email</h5>
        <Input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <Input
          placeholder="Must be at least 6 characters"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit" onClick = {register}>Create Your Amazon Account</LoginButton>
      </form>
      <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
</p>

      <BottomDiv> 
        <span>Already have an Account?</span><a href='/login'>Sign in</a>
        </BottomDiv>
      </Content>
    </Container>
  );
}

export default Register;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display:flex;
    flex-direction: column;
    align-items:center;
     
 
`
const Content = styled.div`
    padding: 50px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
     
    width:300px;

    h1{
        font-weight:500;
        margin-bottom:20px;
    }

    form {
    display:flex;
    flex-direction: column;
    // align-items:center;
     
    input{
        height: 30px;
        padding: 5px;
        margin-bottom: 10px;
        width: 98%;
    }

    h5{
        margin-bottom: 5px
    }

}
p{
    font-size: 12px;
}
span{
    margin-top:25px;
    font-size: 14px;
    margin-bottom: 15px;
    border-bottom: 2px solid  lightgrey;
     
    justify-content: center;
}
p{
  margin-top 15px;
}


     
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
    object-fit:contain;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    width: 98%;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`
const BottomDiv = styled.div `
display: flex;
padding: 10px;
justify-content:bottom;
span{
   margin-top: 0px;
   margin-right: 6px;
}
a {
  font-size: 15px;
}


`