import React, {useState, useEffect,   useContext } from 'react'
import styled from 'styled-components';
import Product  from './Product';
import firebaseApp from './firebase';
import{db} from './firebase';
 import Login from './Login';
import {SearchContext} from './contexts/searchContext';
import {ProductContext} from './contexts/ProductContext';


function Home() {
    
    const {products, setProducts}= useContext(ProductContext)
    const {search, setSearch}= useContext(SearchContext)



    const searcher = (e)=> {
        e.preventDefault();
        const filtered = products.filter(item=> {
          if(item.product.name.toLowerCase().match (search)){
             return item
          }
        })
        console.log("FILTERED", filtered)
        setProducts(filtered)
      }

 
    const getProducts = ()=> {
        db.collection('products').onSnapshot((snapshot)=> {
            let tempProducts = [];
            console.log("SNAPSHOT",snapshot)
            
            
            tempProducts = snapshot.docs.map((doc)=> (
                {
                   id: doc.id,
                   product: doc.data()
                }

            ));
            setProducts(tempProducts);
             
        })
    }

 
    console.log("PRODUCTS",products)
    // console.log(products[1].product.name)

    useEffect(()=> {
        getProducts();

        

    }, [search])
         
    return (
         <Container>
          
          
             <Banner>
               

             </Banner>
           
             <Content>
                 {products.map((data)=> {

                    
                    return (
                     
                    <Product 
                    name = {data.product.name}
                    price = {data.product.price}
                    image = {data.product.image}
                    rating = {data.product.rating}
                    id = {data.id}
                    key = {data.id}

                    />)
                     
                 })}
                 
                 
                 


             </Content>
         </Container>
    )
}

export default Home

const Container = styled.div`
max-width: 1500px;
margin: 0 auto; `
const Banner = styled.div`
background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenFree_DMUX-4110/Gateway/DV3A/US-EN_030121_FreeTierQ1Refresh_ACQ_GW_Hero_D_1500x600_CV3._CB655482702_.jpg');
min-height: 600px; 
background-position: center;
background-size: cover;
z-index: 1;
mask-image: linear-gradient(to botton, rgba(0,0,0,1), rgba(0,0,0,0));
`


const Content = styled.div` 
 
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
z-index: 100px;
display: flex;
flex-flow: row wrap;

  

  `

