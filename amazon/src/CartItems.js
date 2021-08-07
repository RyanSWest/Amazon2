import React, {useContext} from 'react';
import styled from 'styled-components';
// import { Container } from 'winston';
import CartItem from './CartItem';
import {SearchContext} from './contexts/searchContext';

function CartItems({cartItems}) {
    const {search,setSearch} =  useContext(SearchContext)
    return (
       <Container>
           <Title>Shopping Cart</Title>
           
           <hr/>
            
           <ItemsContainer>

               {cartItems?.map(item=> {
                   return (
                    <CartItem
                    id = {item.id}
                    item = {item.product}
                    
                    />

                   )
               })}
                 

           </ItemsContainer>

            
       </Container>
            
       
    )
}

export default CartItems

const Container = styled.div`
 
flex: 0.8;
padding: 20px;
margin-right: 18px;
background: white;`

const Title = styled.h1`
margin-bottom: 8px;


`
const ItemsContainer = styled.div` 


`
