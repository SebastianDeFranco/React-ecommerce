// import React, { createContext } from "react";

// const CartContext = createContext();

// export default CartContext;
import { createContext, useState } from "react";

export const NotiContext = createContext()

export default function UseNotiContext({children}){
    const [cartList, setCartList] = useState([])
    
    function guardarItem(newItem){
        console.log(newItem)
        const idx = cartList.findIndex(item => newItem.item.id === item.item.id)//-1 , posicion
        if(idx === -1){
            setCartList([...cartList,newItem])
        }else{
            const newQuantity= cartList[idx].quantity + newItem.quantity
            console.log('newQuantity', newQuantity)
            const oldList = cartList.filter(old=> old.item.id !== newItem.item.id)
            console.log(oldList);
            setCartList([...oldList,{item: newItem.item, quantity: newQuantity}])
        }//[item1, item2,item3]
    }

    const removeItem = (oldItemId) =>{
        const oldList = cartList.filter(item => item.item.id !== oldItemId)
    }

    const price =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) //[item.quantity, ]
    }


    function cleanList (){
        setCartList([])
    }

    return(
        <NotiContext.Provider value={{
            cartList,
            removeItem,
            price,
            guardarItem
        }}>
            {children}
        </NotiContext.Provider>
    )
};