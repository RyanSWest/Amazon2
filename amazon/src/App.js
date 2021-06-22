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
import SignIn from "./SignIn";

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

  const signUp = (e) => {
    e.preventDefault();
    console.log("SIGNUP CLICK");

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
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
          <Login username={username} email={email} password={password} />
        </Route>
        <Route path="/register">
          <Register username={username} email={email} password={password} />
        </Route>

        <Route path="/cart">
          <Cart cartItems={cartItems} />
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
