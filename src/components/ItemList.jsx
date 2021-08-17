import {useState,useEffect} from 'react'
import Item from './Item'
import React from 'react';
import { Row } from 'react-bootstrap';




// function ItemList({items}) {
//     console.log(items)
// ;    
//         return (
//         <>
//             {items.map((item) => (<Item key={item.id} item={item} />))}
//         </>
//         )
//     }
const ItemList = ({ items }) => {
    console.log(items)
    return (
      <Row style={{ margin: 'auto' }}>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Row>
    );
  };


export default ItemList
