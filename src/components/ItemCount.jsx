import React, {useState} from 'react'

function ItemCount({initial, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    const handleAdd = ()=>{
        if(cantidad<stock){
            setCantidad(cantidad + 1)
        }
    }
    const handleRemove = ()=>{
        if(cantidad>initial){
            setCantidad(cantidad - 1)
        }
    }
    return (
        <>
            <div className="card text-center w-50">
                <div className="card-header">
                    <h4>Contador</h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-outline-primary" onClick={handleRemove}>-</button>
                    <label>{cantidad}</label>
                    <button className="btn btn-outline-primary" onClick={handleAdd}>+</button><br/>
                    <button className="btn btn-primary mt-2" onClick={()=>onAdd(0)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
