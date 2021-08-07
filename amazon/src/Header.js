import React, { useContext } from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {Link} from 'react-router-dom';
import {auth} from './firebase';
import { UserContext } from "./contexts/userContext";
import {SearchContext} from './contexts/searchContext';
import {ProductContext} from './contexts/ProductContext';

const Header = ({cartItems, user, signout}) => {
  
  const {email, setEmail}= useContext(UserContext);
  const {search, setSearch}= useContext(SearchContext)
  const {products, setProducts}=  useContext(ProductContext)
  

  const searcher = (e)=> {
    e.preventDefault();
    const filtered = products.filter(item=> {

      if(item.product.name.toLowerCase().match (search)){
         return item
      }
    })
    console.log("SEARCHIE MEARCHIE")
    console.log("FILTERED", filtered)
    setProducts(filtered)
  }


  const logout =(e)=> {
    e.preventDefault()
    if (user){
      console.log("CLICKIE")
      setEmail(null)
      auth.signOut();
     }
  }
  return (
    <Container>
      <HeaderLogo>
        <Link to = "/"> 
        <img
          src={
            "https://tse3.mm.bing.net/th?id=OIP.iXao1MSXhGqKlExeC9ZC0gHaD2&pid=Api&P=0&w=321&h=168"
          }
        />
         </Link>
      </HeaderLogo>
      
      <LocationOnIcon/>
      <HeaderOptionAdress>
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>

          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAdress>
      <Formie
         type = 'submit'
         onSubmit= {searcher}
         
         
         >
      <HeaderSearch>
         

         
        <HeaderSearchInput
         type=" text"
         name = "search"
         value = {search}
         onChange = {(e)=> setSearch(e.target.value)}
         onSubmit ={searcher}

        
        
        />
        
        <HeaderSearchIconContainer>
          <SearchIcon onClick = {(e)=> searcher()}/>
        </HeaderSearchIconContainer>
      </HeaderSearch>
      </Formie>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne  >Hello, {email}</OptionLineOne>
          <Link to = '/login'>      
          <OptionLineTwo>{email? (<span onClick = {(e)=>logout}>Sign Out</span> ): (<span>Sign In</span> )}</OptionLineTwo>
          </Link> 
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>

          <OptionLineTwo>& Deliveries</OptionLineTwo>
        </HeaderOption>

          
        <HeaderOptionCart>
        <Link to ="/cart"> 
          <ShoppingBasketIcon />

          <CartCount>{cartItems.length}</CartCount>
          </Link>
        </HeaderOptionCart>
         
      </HeaderNavItems>
    </Container>
  );
};

export default Header;

const Formie = styled.form `
display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within{
    box-shadow: 0 0 0 3px #F90;


`

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderLogo = styled.div`
  object-fit: contain;
  img {
    width: 150px;
    height: 60px;
    margin-left: 11px;
  }
`;
const HeaderOptionAdress = styled.div`
  padding-left: 9px;
  display:flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
  span{
    color:white;

  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within{
    box-shadow: 0 0 0 3px #F90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border:0;

  :focus {
    border: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOptionCart = styled.div`
display:flex;
align-items:center;
padding-right: 9px;
a {
  display: flex;
  align-items: center;
  padding-right: 9px;
  color: white;
  text-decoration: none;

}

`;

const CartCount = styled.div`
  padding-left: 4px;
  `;
