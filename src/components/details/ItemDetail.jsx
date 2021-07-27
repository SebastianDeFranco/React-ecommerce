import React from "react"


function ItemDetail({item={}}) {
    return(
        <div>
            <h2>Detalle</h2>
            <img src="/assets/img/capitan-america.jpg"/>
            <h3>Nombre: {item.nombre}</h3>
            <h3>Precio: {item.precio}</h3>
            <h3>Descripción: </h3>
        </div>
    )
}

export default ItemDetail
