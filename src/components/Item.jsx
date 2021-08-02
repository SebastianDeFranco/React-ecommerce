import React from 'react'
import {Button, Card} from 'react-bootstrap';
// import React from "react";
import { useState, useEffect, useContext, useRef } from 'react';
import { Link } from "react-router-dom";


function Item({item}) {
    
    // const { list, quantity } = useContext(cartContext);
    // const [show, setShow] = useState(false);
    // const element = useRef();


    return (
        <div className="col-sm-3 mb-4">
            <Card>
            <Card.Img src={item.img}/>
            <Card.Body className="d-flex justify-content-between flex-column">
                <Card.Title>
                    <h4>{item.title}</h4>
                </Card.Title>
                <Card.Text>
                    <p>${item.price}</p>
                </Card.Text>
                <Link to={`/product/${item.id}`} className="btn btn-primary">Ver más</Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item
