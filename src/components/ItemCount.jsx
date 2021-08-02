import React, { useState } from "react";

const ItemCount = ({ onAdd }) => {
console.log(onAdd);
const [contador, setContador] = useState(1);

const incrementar = () => {
    let max = 10;
    if (contador < max) {
        setContador(contador + 1);
    }
};

const decrementar = () => {
    let min = 1;
    if (contador > min) {
        setContador(contador - 1);
    }
};
const handlerOnAdd = () => {
    onAdd(contador);
};

return (
    <div style={{ width: "50%", height: "10vw", backgroundColor:"#fff", display:"block", margin:"auto", textAlign:"center"}}>
        <button className="btn btn-danger" style={{marginTop:"10px"}} onClick={decrementar}>-</button>
        <span style={{fontSize:"20px", paddingLeft:"10px", paddingRight:"10px"}}>{contador}</span>
        <button className="btn btn-danger" style={{marginTop:"10px"}} onClick={incrementar}>+</button>
        <br />
        <button className="btn btn-danger"style={{marginTop:"10px"}} onClick={handlerOnAdd}>Agregar al carrito</button>
    </div>
    );
};
export default ItemCount;
