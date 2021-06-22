import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router,  Route, Switch, Link} from 'react-router-dom';
import {db} from './firebase';


function App() {
  const [cartItems, setCartItems]= useState([])



  const getCartItems  =()=> {
    db.collection('cart-items').onSnapshot((snapshot)=> {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc)=>( {
        product: doc.data()

      }))
      setCartItems(tempItems);
    })

  }

  useEffect(()=> {
    getCartItems();

  }, [])
  console.log('CART ITEMS', cartItems)
  return (
    <div className="App">
      <Header/>
     <Switch>
     <Route path = "/cart">
        <Cart cartItems= {cartItems}/>
      </Route>

      <Route path = "/">
        <Home/>
      </Route>
     </Switch>

       

     
      
       
    </div>
  );
}

export default App;
