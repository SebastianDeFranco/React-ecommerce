import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {useState} from 'react';
import ItemListContainer from './components/shop/ItemListContainer';
import './components/shop/ItemListContainer.css'


function App() {
  
  const [contador, setContador] = useState(0)

function handleContador(){
  setContador(contador + 1)
}
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Mi Tienda" user="Sebastian"/>
      {contador}<br/>
      <button onClick={handleContador}>Click</button>
    </div>

  );
}

export default App;
