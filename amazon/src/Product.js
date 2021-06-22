import React from 'react';
import styled from 'styled-components';
import {db} from './firebase';

function Product({name, price, rating, image, id}) {

  const addToCart = ()=> {
    console.log(id);
    const cartItem = db.collection('cart-items').doc(id);
    cartItem.get()
    .then((doc)=> {
      console.log(doc)
      if(doc.exists){
        cartItem.update({
          quantity: doc.data().quantity +1
        })
      }
      else{
        db.collection("cart-items").doc(id).set({
          name: name,
          price: price,
          image:image,
          quantity:1

        })
      }

    })
  }
     return (
         <Container>
            <Title>
                { name}
                 </Title>

                <Price>
                 $ { price}
                </Price>
                <Rating>

                  {Array( rating).fill().map(r=> <p>⭐</p>)}
                                     

                    
                    
                    
                </Rating>
                <Image 
                
                src = {image}
                
                />
                <ActionSection>

                <AddToCartButton
                 onClick={addToCart}
                
                
                >
                  Add to Cart</AddToCartButton>

                </ActionSection>
 
             
         </Container>
    )
}

export default Product

const Container = styled.div`
background-color: white;
z-index:100;
flex: 1;
margin: 10px;
padding: 20px;
max-height: 400px;
display: flex;
flex-direction:column;
 




`
const Price = styled.span`
font-weight: 500;
margin-top: 3px;

`
const Title = styled.span``
const Rating = styled.div `
display: flex;
padding: 10px;

`
const Image = styled.img`
max-height:200px;
object-fit:contain;`
const AddToCartButton = styled.button`
width:100px;
height: 30px;
background-color:#f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
margin-top:10px;
cursor: pointer;

`
const ActionSection = styled.div`
display:grid;
place-items: center
 `
const stars = styled.span `
display:flex;
padding: 10p
`
