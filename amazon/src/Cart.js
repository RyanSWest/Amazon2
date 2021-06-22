// import { Container } from '@material-ui/core'
import React from 'react';
import styled  from 'styled-components';
import CartTotal  from './CartTotal';
import CartItems from './CartItems';

function Cart({cartItems}) {

    const getTotalPrice = ()=> {
        let total = 0;
        cartItems.forEach(item => {
            console.log("ITEM PRICE", item.product.price, "QQ", item.product.quantity)
            total +=(item.product.price * item.product.quantity)
            
        });
        return total;
    }

    const getCount = ()=> {
        let count = 0;
        cartItems.forEach((item)=> {
            count+= item.product.quantity;

        })

    }

     console.log("CART" ,cartItems)


    return (
       <Container>
         
         <CartItems cartItems= {cartItems}/>
         <CartTotal cartItems = {cartItems}getCount = {getCount} getTotalPrice={getTotalPrice}/>

       </Container>
            
    )
}

export default Cart

const Container = styled.div`

   display: flex;
   padding: 14px 18px 0 18px;



`


