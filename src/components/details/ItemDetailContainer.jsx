import React from 'react';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {getItem} from './getMocks';
import ItemCount from '../ItemCount';
import { useParams } from 'react-router-dom';

const handleCount=(cant)=>{
    console.log(cant);
}

function ItemDetailContainer() {
const [item, setItem] = useState({})
const {id} = useParams()
useEffect(() => {
    getItem()
    setTimeout(()=>{
        
    })
    .then(resp => setItem(resp))
}, [id]);

    console.log(item)
    return (
        <>
            {item.map(elemento => <ItemDetail nombre={elemento.title} img={elemento.picUrl} precio={elemento.price}  />)}
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        </>
    )
}

export default ItemDetailContainer
