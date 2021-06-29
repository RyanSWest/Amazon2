import "./App.css";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";
import Login from "./Login";
import styled from "styled-components";
import Register from "./Register";
import Checkout from './Checkout';
import { UserContext, PasswordContext  } from "./contexts/userContext";
import {SearchContext} from './contexts/searchContext';
// import {useStateValue} from "./StateProvider"
 function App() {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [ user, setUser]= useState(null)
  const[search, setSearch]= useState('')

  const searcher = (e)=> {
    const filtered = cartItems.filter(item=> {
      if(item.name.match (search)){
         return item
      }
    })
    console.log("FILTERED", filtered)
    return filtered
  }
  searcher()
 
  useEffect(()=> {
    auth.onAuthStateChanged((authUser)=> {
      if (authUser){
        console.log("AUTH USER", authUser)
        setUser(authUser)
        // console.log("USERNAME", user.displayname)

      }else{
        console.log("NO AUTH USER")
      }
    })

  }, [user])
   
  const getTotalPrice = ()=> {
    let total = 0;
    cartItems.forEach(item => {
         total +=(item.product.price * item.product.quantity)
        
    });
    return total.toFixed(2);
     
}
  
   
  const getCartItems = () => {
    db.collection("cart-items").onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };
 
   
   

   

 

  useEffect(() => {
    getCartItems();
  }, []);
 
  return (
    <Container>
      <SearchContext.Provider value = {{search, setSearch}}> 
      <UserContext.Provider value = {{email,setEmail} }  > 
      <PasswordContext.Provider value = {{password, setPassword}}> 
      <Header 
       user = {user}
      
      cartItems={cartItems} />

      <Switch>
        <Route path= '/register'>
          <Register/>
        </Route>
        
        <Route path="/login"
          
        
        
        >
          <Login 
          user = {user}
          
          />
        </Route>
         

        <Route path="/cart">
          <Cart cartItems={cartItems}
                getTotalPrice = {getTotalPrice} />
        </Route>

        <Route path = '/checkout'>
          <Checkout
           cartItems ={cartItems}
           getTotalPrice = {getTotalPrice}
          
          >

          </Checkout>


        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </PasswordContext.Provider>
      </UserContext.Provider>
      </SearchContext.Provider>
      
    </Container>
    
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
