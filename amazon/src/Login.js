import React, {useState, useHistory} from 'react';
import styled from 'styled-components';
  
import { auth, provider} from './firebase';

function Login( ) {

    // const history = useHistory();


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const login = (e)=> {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
      .then((auth)=> {
        //   history.push('/')
        console.log("LOGIN!!")

      })
      .catch(e => alert(e.message));

  }
  
  const register = (e)=> {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth=> {
        // history.push('/');

        console.log("REGISTER SUCKA!!!")

    })
    .catch((err)=> {
        alert(err.message);
    })
    
}
   

     
     
    return (
        <Container>
        <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />

        <Content>
             <h1>Sign-In</h1>
            
            <form type = 'submit'
            onSubmit={login}
            
            
            >

                <input
                name = 'name'
                type = 'email'
                placeholder = 'email'
                value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                
                
                
                
                />
                 <input
                name = 'password'
                type = 'password'
                placeholder = 'password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
                
                
                
                />




            </form>


            <LoginButton
                onClick={login}
            >
                Sign -in
            </LoginButton>
            <RegisterButton onClick = {register}>Register</RegisterButton>
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
    text-align: center;
    width:75%;
     
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
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`

const RegisterButton = styled.button` 
 border-radius: 2px;
 width:100%;
 height:30px;
 border: 1px solid;
 margin-top: 10px;
 border-color:darkgray;



`