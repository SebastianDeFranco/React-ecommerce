import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Item({item}) {
    
    
    return (
        <div className="col-md-3 col-sm-6 mb-4">
            <Card>
            <Card.Img src={item.img}/>
            <Card.Body className=" col-sm-12 d-flex justify-content-between flex-column">
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
