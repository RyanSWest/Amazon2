import React from 'react';
import styled from 'styled-components';
  
import { auth, provider} from './firebase';
 
function Login({setUser}) {

    const signIn = ()=> {
        auth.signInWithPopup(provider).then((res)=> {
            let user = res.user;
            let newUser = {
                name: user.displayName,
                email:user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser);
        }).catch((error)=> {
            alert(error.message)
        })
    }

     
    return (
        <Container>
        <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />

        <Content>
             <h1>Sign-In</h1>
            
            <form type = 'submit'
            
            
            >

                <input
                name = 'name'
                type = 'text'
                placeholder = 'username'
                
                
                
                
                />
                 <input
                name = 'password'
                type = 'password'
                placeholder = 'password'
                
                
                
                
                />




            </form>


            <LoginButton
                onClick={signIn}
            >
                Sign -in
            </LoginButton>
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