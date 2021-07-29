import {useState,useEffect} from 'react'
import Item from './Item'
import React from 'react';
import {Card, Button} from 'react-bootstrap'

const Comics = [
    {
        id:1,
        title:"Capitan America",
        price:10000,
        categoria:"Marvel",
        picUrl:"/assets/img/capitan-america.jpg"
    },
    {
        id:2,
        title:"Spiderman Simbionte",
        price:10000,
        categoria:"Marvel",
        picUrl:"/assets/img/spiderman-simbionte.jpg"
    },
    {
        id:3,
        title:"Spiderman y Venom",
        price:10000,
        categoria:"Marvel",
        picUrl:"/assets/img/spiderman-venom.jpg"
    },
    {
        id:4,
        title:"Comic 4",
        price:10000,
        categoria:"DC",
        picUrl:"/assets/img/batman.jpg"
    },
    {
        id:5,
        title:"Comic 5",
        price:10000,
        categoria:"DC",
        picUrl:"/assets/img/flash.jpg"
    },
    {
        id:6,
        title:"Comic 6",
        price:10000,
        categoria:"DC",
        picUrl:"/assets/img/flash-2.jpg"
    },
];
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(Comics);
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
                {Comics.map(item=><div className="col-sm-3 mb-4 d-flex justify-content-between">
            <Card>
            <Card.Img src={item.picUrl}/>
            <Card.Body className="d-flex justify-content-between flex-column">
                <Card.Title>
                    <h4>{item.Title}</h4>
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
