import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {useState} from 'react';
import ItemListContainer from './components/shop/ItemListContainer';
import './components/shop/ItemListContainer.css'
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/details/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';


function App() {
  
  const [contador, setContador] = useState(0)

function handleContador(){
  setContador(contador + 1)
}
  return (
    <Router>
      <div className="body">
      <NavBar/>
        <Switch>
          <Route exact path='/detail' components={ItemDetailContainer} />
          <Route exact path="/">
          <ItemListContainer greeting="Conoce Nuestros Productos" user="Actividad"/>
          </Route>
          <Route exact path="/category/: categoryId">
          <ItemListContainer greeting="Conoce Nuestros Productos" user="Actividad"/>
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
