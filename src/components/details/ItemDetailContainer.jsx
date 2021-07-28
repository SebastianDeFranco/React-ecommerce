import React from 'react';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {getItem} from './getMocks';
import ItemCount from '../ItemCount';

const handleCount=(cant)=>{
    console.log(cant);
}

function ItemDetailContainer() {
const [item, setItem] = useState({})
useEffect(() => {
    getItem()
    .then(resp => setItem(resp))
}, [])

    console.log(item)
    return (
        <>
            <ItemDetail item={item}/>
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        </>
    )
}

export default ItemDetailContainer
