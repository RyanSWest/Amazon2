// import { Container } from '@material-ui/core'
import React from 'react';
import styled  from 'styled-components';
import CartTotal  from './CartTotal';
import CartItems from './CartItems';

function Cart({cartItems}) {
    return (
       <Container>
         
         <CartItems cartItems= {cartItems}/>
         <CartTotal/>

       </Container>
            
    )
}

export default Cart

const Container = styled.div`

   display: flex;
   padding: 14px 18px 0 18px;



`


