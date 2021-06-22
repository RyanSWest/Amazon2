import React from 'react'
import styled from 'styled-components'

function CartTotal({cartItems, getTotalPrice, getCount}) {
    return (
        <Container>
         <Subtotal>Subtotal ({getCount()} items):
         <NumberFormat value = {getTotalPrice()} displayType={'text'} thousandSeperator={true}prefix={'$'}/>
         </Subtotal>

        </Container>
    )
}

export default CartTotal

const Container = styled.div 
` height: 200px;
  flex: 0.2;
  padding: 20px;
  margin-right:18px;
   
  background-color: white;`

  const Subtotal = styled.h2`
    margin-bottom: 16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    // vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background:  #ddb347;
    }
`
const NumberFormat = styled.div` `