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
            <div className="card text-center w-50 bg-secondary">
                <div className="card-header">
                    <h4>Contador</h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-outline-warning" onClick={handleRemove}>-</button>
                    <label>{cantidad}</label>
                    <button className="btn btn-outline-warning" onClick={handleAdd}>+</button><br/>
                    <button className="btn btn-danger mt-2" onClick={e=>onAdd(cantidad)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
