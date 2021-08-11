import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/shop/ItemListContainer';
import './components/shop/ItemListContainer.css'
import ItemDetailContainer from './components/details/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
// import CartState from './context/CartState';
import UseNotiContext from './context/CartContext';
import Cart from './components/cart';


function App() {
  
  return (
    <Router>
      {/* <div className="body"> */}
      <UseNotiContext>
      <NavBar/>
        <Switch>
          <Route exact path="/">
          <ItemListContainer greating="Conoce Nuestros Productos" user="Actividad"/>
          </Route>
            <Route exact component={ItemDetailContainer} path="/product/:id" />
            <Route exact component={ItemListContainer} path="/category/:categoryId"/>
            <Route exact component={Cart} path="/cart"/>
          </Switch>
      </UseNotiContext>
      {/* </div> */}
    </Router>
  );
}

export default App;
