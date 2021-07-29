import {useState,useEffect} from 'react'
import Item from './Item'
import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import data from './data/data';


const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data);
    },2000);
    setTimeout(()=>{
        reject(console.log('Error'));
    },3000);
});
 export const getList = () =>{
    return promise
}

function ItemList() {
    

    
    
        return (
            <div>
                {data.map(item=><div className="col-sm-3 mb-4 d-flex justify-content-between">
            <Card>
            <Card.Img src={item.picUrl}/>
            <Card.Body className="d-flex justify-content-between flex-column">
                <Card.Title>
                    <h4>{item.title}</h4>
                </Card.Title>
                <Card.Text>
                    <p>${item.price}</p>
                </Card.Text>
                <Button className="btn btn-danger">Ver Producto</Button>
            </Card.Body>
            </Card>
        </div>)}
            </div>
        )
    }
    


export default ItemList
