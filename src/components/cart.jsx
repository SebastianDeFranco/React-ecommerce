import React, {useContext, useState} from 'react'
import {NotiContext} from '../context/CartContext'
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFirestore } from './servicios/firebaseService';

const listaItem = [
    {
        id:'1',
        title:"Capitan America",
        price:10000,
        categoria:"Marvel",
        img:"/assets/img/capitan-america.jpg"
    },
    {
        id:'2',
        title:"Spiderman Simbionte",
        price:8000,
        categoria:"Marvel",
        img:"/assets/img/spiderman-simbionte.jpg"
    },
    {
        id:'3',
        title:"Spiderman y Venom",
        price:8000,
        categoria:"Marvel",
        img:"/assets/img/spiderman-venom.jpg"
    },
    {
        id:'4',
        title:"Batman",
        price:15000,
        categoria:"DC",
        img:"/assets/img/batman.jpg"
    },
    {
        id:'5',
        title:"Flash",
        price:10000,
        categoria:"DC",
        img:"/assets/img/flash.jpg"
    },
    {
        id:'6',
        title:"Flash",
        price:12000,
        categoria:"DC",
        img:"/assets/img/flash-2.jpg"
    },
];

const initialState = {
    name:'',
    phone:'',
    email:''
}

function Cart() {
    const [buyer, setBuyer] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const {cartList, guardarItem, price} = useContext(NotiContext)

    const order= {buyer, item: listaItem}

    const handlerChange =(e)=>{
        setBuyer({
            ...order,
            [e.target.name] : e.target.value
        })
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        const db = getFirestore()
        db.collection('order').add(order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=>{setLoading(false)})
    }
    console.log(order)
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

                    <form 
                    onSubmit={handlerSubmit}
                    onChange={handlerChange}
                    >
                        <input 
                        type="texto" 
                        placeholder="nombre"
                        name="name"
                        value={buyer.name}
                        />
                        <input 
                        type="texto" 
                        placeholder="telefono"
                        name="phone"
                        value={buyer.phone}
                        />
                        <input 
                        type="texto" 
                        placeholder="email"
                        name="email"
                        order={buyer.email}
                        />
                    </form>
                </>
            ))}
        </>
    )
}

export default Cart
