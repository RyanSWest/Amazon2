import React from 'react';
import styled from 'styled-components';

function Product({title, price, rating, image, id}) {
     return (
         <Container>
            <Title>
                { title}
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

                <AddToCartButton>Add to Cart</AddToCartButton>

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

`
const ActionSection = styled.div`
display:grid;
place-items: center
 `
const stars = styled.span `
display:flex;
padding: 10p
`
