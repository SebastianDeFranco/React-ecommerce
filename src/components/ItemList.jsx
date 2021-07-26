import {useState,useEffect} from 'react'
import Item from './Item'
import React from 'react';

function ItemList() {
    const Comics = [
        {
            id:1,
            title:"Comic 1",
            price:10000,
            picUrl:""
        },
        {
            id:2,
            title:"Comic 2",
            price:10000,
            picUrl:""
        },
        {
            id:3,
            title:"Comic 3",
            price:10000,
            picUrl:""
        },
        {
            id:4,
            title:"Comic 4",
            price:10000,
            picUrl:""
        },
        {
            id:5,
            title:"Comic 5",
            price:10000,
            picUrl:""
        },
        {
            id:6,
            title:"Comic 6",
            price:10000,
            picUrl:""
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
    export const getItems = () =>{
        return promise
    }
    
        return (
            <div>
                {Comics.map(item=>it)}
            </div>
        )
    }
    


export default ItemList
