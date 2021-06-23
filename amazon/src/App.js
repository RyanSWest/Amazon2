import "./App.css";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import Login from "./Login";
import styled from "styled-components";
import Register from "./Register";
import Checkout from './Checkout';
// import {useStateValue} from "./StateProvider"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  console.log("CART ITEMS", cartItems);

  return (
    <Container>
      <Header signOut={signOut} user={user} cartItems={cartItems} />

      <Switch>
        <Route path="/login">
          <Login setUser= {setUser}/>
        </Route>
        <Route path="/register">
          <Register
           signUp = {signUp}
             />
        </Route>

        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>

        <Route path = '/checkout'>
          <Checkout cartItems ={cartItems}>

          </Checkout>


        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
