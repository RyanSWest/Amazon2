import React from 'react';
import styled from 'styled-components'
;
function CartItem() {
    return (
        <Container>
            Cart Item
            <ImageContainer>

            </ImageContainer>
            <CartItemInfo> 
            <CartItemInfoTop></CartItemInfoTop>
            <CartItemInfoBottom></CartItemInfoBottom>
            </CartItemInfo>
            
            <CartItemPrice>


            </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div``
const ImageContainer = styled.div``
const CartItemInfoTop = styled.div` `
const CartItemInfoBottom = styled.div` `
const CartItemInfo = styled.div``
const CartItemPrice = styled.div``