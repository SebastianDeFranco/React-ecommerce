import {useState,useEffect} from 'react'
import Item from './Item'
import React from 'react';




function ItemList({items}) {
    console.log(items)
;    
        return (
        <>
            {items.map((item) => (<Item key={item.id} item={item} />))}
        </>
        )
    }
    


export default ItemList
