import React from 'react';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {getItem} from './getMocks';

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
        </>
    )
}

export default ItemDetailContainer
