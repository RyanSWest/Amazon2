import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router,  Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
     <Route path = "/cart">
        <Cart/>
      </Route>

      <Route path = "/">
        <Home/>
      </Route>
     </Switch>

       

     
      
       
    </div>
  );
}

export default App;
