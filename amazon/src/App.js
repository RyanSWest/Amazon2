import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router,  Route, Switch, Link} from 'react-router-dom';
import {db, auth} from './firebase';
import Login from './Login';
import styled from 'styled-components';


function App() {
  const [cartItems, setCartItems]= useState([])
  const [user,setUser]= useState(JSON.parse(localStorage.getItem('user')));



  const getCartItems  =()=> {
    db.collection('cart-items').onSnapshot((snapshot)=> {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc)=>( {
        id: doc.id,
        product: doc.data()

      }))
      setCartItems(tempItems);
    })

  }

  const signOut = ()=> {
    auth.signOut().then(()=> {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  useEffect(()=> {
    getCartItems();

  }, [])
  console.log('CART ITEMS', cartItems)
   

    return (
      <Router>
        {/* {
          !user ? (
            <Login setUser={setUser} />
          ) : ( */}
            <Container>
              <Header 
                signOut={signOut}
                user={user} 
                cartItems={cartItems} />
  
              <Switch>
  
                <Route path="/cart">
                  <Cart cartItems={cartItems} />
                </Route>
  
                <Route path="/">
                  <Home />
                </Route>
  
              </Switch>
            </Container>
          )
        {/* } */}
      </Router>
    );
  }
  
 
 
export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
