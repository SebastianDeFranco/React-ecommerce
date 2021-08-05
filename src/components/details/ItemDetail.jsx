import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";


const ItemDetail = ({ item }) => {
    const [irCart, setIrCart] = useState(false);
    console.log(item);

    const onAdd = (contador) => {
    console.log("Se han seleccionado: " + contador);
    setIrCart(true);
};

return (
    <>
    <div className="card w-50 text-center" style={{display:"block", margin:"auto",marginTop:"20px", marginBottom:"20px"}}>
        <div className="card-header">
            <h2>{item.title}</h2>
        </div>
        <div className="card-body">
            <img src={item.img} className="w-80" />
            <p className="titulo-principal">{item.categoria}</p>
            <p style={{fontSize:"20px"}}>${item.price}</p>
        </div>
    </div>
    {irCart ? (
        <Link to={`/cart`}>
            <button className="btn btn-success" style={{display:"block", margin:"auto", textDecoration:"none"}}>Terminar compra</button>
        </Link>
    ) : (
        <ItemCount onAdd={onAdd} />
    )}
    </>
);
};

export default ItemDetail;