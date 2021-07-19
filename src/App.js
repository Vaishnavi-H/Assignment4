import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import View from './Components/View';
import Cart from './Components/Cart';
import productCard from './Components/ProductData';
import productDetails from  './Components/Details';
import Home from './Components/Home';
import Header2 from './Components/Header2';
import Show from './Components/Show';
import Header3 from './Components/Header3';




function App() {
  return (
     
    <Router>
    
      <Switch>
      <Route path='/' exact>
      <Header productCard={productCard}  />
     
      </Route>
      <Route path='/View/:id'>
      <View  productCard={productCard}/>
      </Route>
      <Route path='/Cart'>
      <Cart  />
     
      </Route>
      <Switch>
      <Route path='/Content'exact > </Route>
      <Route exact path='/Header2'> <Header2 productDetails={productDetails}/></Route>
      <Route exact path='/Header3'><Header3 productDetails={productDetails}/></Route>  
      <Route path='/Header'><Header productCard={productCard}/></Route>
      <Route path='/Show/:id'>
      <Show  productDetails={productDetails}/>
      </Route>
      </Switch>
      </Switch>
      
     </Router>   
     
    
  );
}

export default App;
