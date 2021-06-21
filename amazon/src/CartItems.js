import React from 'react';
import styled from 'styled-components';
// import { Container } from 'winston';
import CartItem from './CartItem';

function CartItems() {
    return (
       <Container>
           <Title>Shopping Cart</Title>

           <ItemsContainer>
                <CartItem/>

           </ItemsContainer>

            
       </Container>
            
       
    )
}

export default CartItems

const Container = styled.div`
height: 300px;
flex: 0.8;
padding: 20px;
margin-right: 18px;
background: white;`

const Title = styled.div``
const ItemsContainer = styled.div` `
