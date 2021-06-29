import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function Checkout({cartItems}) {
    console.log("CHECKOUT ITEMS", cartItems)
    return (
        <div>
            <h1>Checkout</h1>
             {cartItems.map (item=> {
                 return(
                    <Container>
                     
                     
                    <ImageContainer>
                        <img src = {item.product.image}/>
        
                    </ImageContainer>
                    <CartItemInfo> 
                    <CartItemInfoTop>
                        <h2> {item.product.name}</h2>
                        <h2>Qty:{item.product.quantity}</h2>
                        <h2>${item.product.price}</h2>
                    </CartItemInfoTop>
                    
                    </CartItemInfo>
                    
                     
                </Container> )
             })}

            
        </div>
    )
}

export default Checkout
const Container = styled.div`
padding-top: 12px;
padding-bottom:12px;
display:flex;
border-bottom: 1px solid #DDD;
`
const ImageContainer = styled.div`
width: 180px;
height: 180px;
flex-shrink: 0;
flex-grow: 0;
margin-right: 16px;

img{
    object-fit:contain;
    height: 100%;
    width: 100%;
}

`
const CartItemInfoTop = styled.div`
// color: #007185 
h2{ 
    font-size: 18px;
    color: #007185 

}

`
const CartItemInfoBottom = styled.div`
display: flex;
margin-top: 4px;
align-items: center;

 `
const CartItemInfo = styled.div`
flex-grow: 1;
`
const CartItemPrice = styled.div`
font-size: 18px;
font-weight: 700;
margin-left:16px;

`
const CartItemQuantityContainer = styled.div`
select {
    border-radius:7px;
    background-color:#F0F2F2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15,17,17,15)

    :focus {
        outline:none;
    }

} 
   

`