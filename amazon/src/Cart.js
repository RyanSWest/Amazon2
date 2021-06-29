// import { Container } from '@material-ui/core'
import React from 'react';
import styled  from 'styled-components';
import CartTotal  from './CartTotal';
import CartItems from './CartItems';
import {Link} from 'react-router-dom';

function Cart({cartItems}) {

    const getTotalPrice = ()=> {
        let total = 0;
        cartItems.forEach(item => {
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

 

    return (

       <div>
         {  cartItems?.length ===0?(
             
             <EmptyDiv>


                 <EmptyCartPic> 
                 <img src = "https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"/>
                 </EmptyCartPic>

                 <EmptyTextDiv>

                 <h2>Your Amazon Cart is empty</h2>
                 <h4></h4>
                 <Link to = "/"> 
                 <ShopLink>Shop Today's Deals</ShopLink>
                 </Link>

                 <Link to ="/login"> 
                 <SignIn>Sign in to your account</SignIn>
                 </Link>
                 <Link to = "/register">

                 <SignUp>Sign Up Now</SignUp>
                 </Link>
                 
                 </EmptyTextDiv>
         
                  
             </EmptyDiv>
             
              
              


         ):(
             <Container>
         
         <CartItems cartItems= {cartItems}/>
         <CartTotal cartItems = {cartItems}getCount = {getCount} getTotalPrice={getTotalPrice}/>
         
         </Container>
         
         
         )

}



       </div>
            
   
   
   
            )
}

export default Cart

const Container = styled.div`

   display: flex;
   padding: 14px 18px 0 18px;



`

const EmptyDiv = styled.div `
display: flex;
padding:35px;
width:100%;
 


`
const EmptyCartPic = styled.div `
 display:flex;
 width:25%;
 background-color:white;



`
const EmptyTextDiv = styled.div`
background-color:white;
padding:10px;

`
const SignIn = styled.button `
background-color: gold;
border-radius:5px;
padding: 7px;

` 
const SignUp = styled.button `
background-color: white;
border-radius:5px;
padding: 7px;


`
const ShopLink = styled.p` 
color: #007185;
padding-bottom: 12px;




`




