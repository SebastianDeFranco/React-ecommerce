import React, {useContext, useState} from 'react'
// import { NotiContext } from '../context/cartContext'
import {NotiContext} from '../context/CartContext'
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cart() {
    const {cartList, guardarItem, price} = useContext(NotiContext)
    return(
        <>
            {cartList.length === 0 && <h2 style={{textAlign:"center"}}>No hay Productos Seleccionados
            <Link to={`/`}> 
            <button className="btn btn-secondary" style={{display:"block", margin:"auto"}}>Ir a la Tienda</button></Link>
            </h2>}
            {cartList.map(item =>(
                <>
                    <Table striped bordered hover key={item.id}>
                    <thead>
                        <tr>
                        <th className="col-4">Cantidad</th>
                        <th className="col-4">Nombre</th>
                        <th className="col-4">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="col-4">{item.quantity}</td>
                        <td className="col-4">{item.item.title}</td>
                        <td className="col-4">{item.item.price}</td>
                        </tr>
                    </tbody>
                    </Table>
                </>
            ))}
        </>
    )
}

export default Cart