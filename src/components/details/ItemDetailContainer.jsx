import React from 'react';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import itemsPromise from '../data/data';


const handleCount=(cant)=>{
    console.log(cant);
}

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        itemsPromise.then((resp) => {
        setItem(resp.find((li) => li.id === id));
    });
    }, []);
    console.log(item);

    return (
    <>
        <ItemDetail item={item} />
    </>
    );
};

export default ItemDetailContainer;
