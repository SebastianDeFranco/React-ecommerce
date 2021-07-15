import React from 'react'
// import cart from './cart.svg'
import carrito from './carrito.png'
import './CartWidget.css'

const CartWidget = ()=> {
    return (
        <div>
            <img src={carrito} alt="cart" className="cartWidget" />
        </div>
    )
}

export default CartWidget
