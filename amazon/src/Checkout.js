import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import {Link } from 'react-router-dom'

function Checkout({cartItems, getTotalPrice}) {
    console.log("CHECKOUT ITEMS", cartItems)
    const tax = getTotalPrice()* .15;
    const grandTotal = parseInt (tax) + parseInt (getTotalPrice())

    console.log("CHECKOUT CART", cartItems)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    const arrive =()=>{
        let day = parseInt (d.getDate()) +3;
         let month = months[d.getMonth()]
         const nextMonth = parseInt(month)+1

         console.log("MONTH", month, "DAY", day)

        if (day> 31){
            month = months[nextMonth]
            day = 1
        }
         else{
             day = day;
         }

        return month, day
    }
    
   arrive()
    
    return (
        <Container>
            <AmazonLogo src = "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/confirm-banner._CB485943246_.gif"/>
            
            <h2>Review your order</h2>

            <TopDiv>
                <TopLeft> 

                    <SubDiv>

                    <h4>Shipping address</h4>
            <span>115 South First Street</span>
            <span>Austin, Texas 78704</span>
            <span>United States</span>
            <span>Phone: 5125558888</span>
                    </SubDiv>
            <SubDiv>
             <h4>Payment method</h4>
             <CreditCard>


              <img src = 'https://images-na.ssl-images-amazon.com/images/G/01/checkout/payselect/card-logos-small/plcc._CB485946599_.gif'/>
             
              </CreditCard>
              <h4>Billing address</h4>
              <span>Same as shipping address</span>
               
            </SubDiv>
            <SubDiv>
            <h4>Add a gift card, promotion code, or Voucher</h4>
                <ButtonHolder>

                
                <input
                placeholder= 'Enter code'
                
                />
                <button>Apply</button>
                </ButtonHolder>
                 
            </SubDiv>
            


            </TopLeft>
            <TopRight>
                <Link to = '/payment'> 
                <PlaceOrder>Place Your Order</PlaceOrder>
                </Link>
                <span>By placing your order, you agree to Amazon's</span>
                <span> privacy notice and conditions of use.</span>
                <h4>Order Summary</h4>
                <span>Items( {cartItems.length})</span>
                <div>

                <span>Total before Tax: </span>  <span className = 'span-right'>${getTotalPrice()}</span>
                </div>
                <div>
                   <span className = "left-span">Estimated Tax to be collected</span>  <span className= 'span-right'>${tax.toFixed(2)}</span>
                </div>
                <div>

                <h3 className = 'h3-left'>Order total:</h3> < h3 className = 'h3-right'>${grandTotal.toFixed(2)}</h3>
                </div>
                 
               
            
            </TopRight>
            

            </TopDiv>


             
             {cartItems?.map (item=> {
                 return(
                    <CartItemDiv>
 
                     
        
                    <ImageContainer>
                    <Deliver>Delivery: {months[ d.getMonth()]} {   d.getDate()}</Deliver>

                        <img src = {item.product.image}/>
        
                    </ImageContainer>
                    <CartItemInfo> 
                    <CartItemInfoTop>
                        <h2> {item.product.name}</h2>
                        <h2>Qty:{item.product.quantity}</h2>
                        <h2>${item.product.price}</h2>
                    </CartItemInfoTop>
                    
                    </CartItemInfo>
                    
                     
                </CartItemDiv> )
             })}
         
   
        </Container>
         
    )
}

export default Checkout
const Container = styled.div`
padding-top: 12px;
padding-bottom:12px;
 
border-bottom: 1px solid #DDD;

h2 {
    margin-left: 30px;
}
`
const PlaceOrder = styled.button` 
background-color: gold;
padding: 15px;
border-radius: 4px;

 `

const Deliver = styled.h4 ` 
    color: green;
    margin-top: 10px;
    margin-left: 10px;
    
    
    `

 
const CartItemDiv = styled.div `
padding-top: 12px;
padding-bottom:12px;
display:flex;
border-bottom: 1px solid #DDD;
width: 60%;
border: 2px solid lightgrey;
margin-left: 30px;
margin-top: 15px;



`
const SubDiv = styled.div `  
display: flex;
flex-direction: column;
padding: 10px;
margin: 5px;

input{
     
    width: 50%;
    border-radius: 4px;
}

`
const ButtonHolder = styled.div `
display: flex;
align-content: center;
button { 
    height: 35px;
    border-radius: 4px;
    margin-left: 10px;
    border: 2px  solid lightgrey;
}

`
const CreditCard = styled.div  `
    width: 105px;
    height: 45px;
    display: flex;

    img {
        object-fit:contain;
        width: 45px;
        height: 45px;

    }
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

const TopDiv= styled.div `
display: flex;



`
const TopLeft = styled.div `

display: flex;
flex-direction: row;
width: 65%;
border: 2px solid lightgrey;
border-radius: 5px;
padding: 10px;
margin-left: 30px;
margin-top: 15px;
span {
    margin: 2px;
    font-size: 12px;}
 `



const TopRight = styled.div `
display: flex;
flex-direction: column;
width: 35%;
border: 2px solid lightgrey;
border-radius: 5px;
padding: 10px;
margin-left: 30px;
margin-top: 15px;
span {
    margin: 2px;
    font-size: 12px;}

    div{
        display: block;
        .span-left{
            float:left;
        }
        .span-right{
            float: right;
        }
        .h3-left{
            float: left;
            margin-top: 15px;
        }
        .h3-right{
            float: right;
            margin-top: 15px;
        }

         
         
    }
    h3 {
        color:#CD5C5C;
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

const AmazonLogo = styled.img`
    height: 30px;
    margin-bottom: 40px;
    object-fit:contain;
`

 