import React, {useState, useContext , useEffect} from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';  
import { auth, provider} from './firebase';
import {UserContext, PasswordContext} from './contexts/userContext';

function Login( ) {

    const history = useHistory();
     const { email, setEmail}= useContext(UserContext)
     const {password, setPassword}= useContext(PasswordContext)
 
    useEffect(()=> {
        setEmail('')
        setPassword('')

    }, [ ])

 
  const login = (e)=> {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
      .then((auth)=> {
          localStorage.clear()
          history.push('/')
          let user = localStorage.setItem('user', email)
          
        console.log("LOGIN!!")

      })
      .catch(e => alert(e.message));

  }
  
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

const goToReg = (e)=> {
    e.preventDefault();
    history.push('/register')
}
   

     
     
    return (
        <Container>
        <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />

        <Content>
             <h1>Sign-In</h1>
            
            <form type = 'submit'
            onSubmit={login}
            
            
            >
                <h5>Email</h5>
                <input
                name = 'name'
                type = 'email'
                placeholder = 'email'
                value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                
                
                
                
                />
                <h5>Password</h5>
                 <input
                name = 'password'
                type = 'password'
                placeholder = 'password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
                
                
                
                />




            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <ButtonContainer> 
            <LoginButton
                onClick={login}
            >
                Sign -in
            </LoginButton>

            <span>New to Amazon?</span>
             </ButtonContainer>
             <Link to = '/register'> 
             
            <RegisterButton >Create Your Amazon Account</RegisterButton>
            </Link>
        </Content>
    </Container>
    )
     
}

export default Login

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

const RegisterButton = styled.button` 
 border-radius: 2px;
 height:30px;
 border: 1px solid;
 margin-top: 10px;
 border-color:darkgray;
 cursor: pointer;
 width:98%;



`
const ButtonContainer  = styled.div `
display: flex;
flex-direction: column;
align-items: center;

`