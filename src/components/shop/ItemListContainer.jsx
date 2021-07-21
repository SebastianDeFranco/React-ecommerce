import React from 'react'
import ItemCount from '../ItemCount'

const handleCount=(cant)=>{
    console.log(cant);
}


function ItemListContainer(props) {
    const{greeting}= props
    return (
        <div className="banner">
            <h1 className="greeting">{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
        </div>
    )
}

export default ItemListContainer
