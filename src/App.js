import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {useState} from 'react';
import ItemListContainer from './components/shop/ItemListContainer';
import './components/shop/ItemListContainer.css'
import ItemCount from './components/ItemCount';


function App() {
  
  const [contador, setContador] = useState(0)

function handleContador(){
  setContador(contador + 1)
}
  return (
    <div className="body">
      <NavBar/>
      <ItemListContainer greeting="Conoce Nuestros Productos" user="Actividad"/>
    </div>

  );
}

export default App;
