import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
 
function CartTotal({cartItems}) {

    const getTotalPrice = ()=> {
        let total = 0;
        cartItems.forEach(item => {
            console.log("ITEM PRICE", item.product.price, "QQ", item.product.quantity)
            total +=(item.product.price * item.product.quantity)
            
        });
        return total.toFixed(2);
         
    }

    const getCount = ()=> {
        let count = 0;
        cartItems.forEach((item)=> {
            console.log("ITEM QUANTITY", item, item.product.quantity)
            count+= item.product.quantity;

        })
        return count

    }



    return (
        <Container>
         <Subtotal>Subtotal ({getCount()} items):
          <h3>{getCount()}</h3>
         <h2>${getTotalPrice()}</h2>
         </Subtotal>
            <Link to = "/checkout"> 
         <CheckoutButton>Checkout</CheckoutButton>
         </Link>

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
const NumberFormat = styled.h2` `