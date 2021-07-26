import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import getItems from '../ItemList'


const handleCount=(cant)=>{
    console.log(cant);
}



function ItemListContainer() {
const [Comics, setComics] = useState([])
useEffect(() => {
    getItems()
    .then((result)=>{
        setComics(result)
        console.log("Cargo cards 2 seg");
    })
    .catch((err)=>{
        console.log(err);
    })
}, [])

    return (
        <div>
        <ItemCount stock={5} initial={1} onAdd={handleCount} />
        <ItemList comic={Comics}/>
        </div>
    )
}
export default ItemListContainer
