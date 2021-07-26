import React from 'react'
import {Button, Card} from 'react-bootstrap';



function Item({item}) {
    
    return (
        <div className="col-sm-3 mb-4">
            <Card>
            <Card.Img src={item.picURL}/>
            <Card.Body className="d-flex justify-content-between flex-column">
                <Card.Title>
                    <h4>{item.Title}</h4>
                </Card.Title>
                <Card.Text>
                    <p>${item.price}</p>
                </Card.Text>
                <Button className="btn btn-danger">Ver</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item
