import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../servicios/firebaseService';
import ItemList from '../ItemList';
import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const itemCollection = db.collection('items');
    itemCollection
      .orderBy('price', 'desc')
      .get()
      .then((info) => {
        const prod = info.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        const categorias = prod.filter((i) => i.categoryId === `${id}`);
        id === undefined ? setItems(prod) : setItems(categorias);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      <div>
        <h2 className="titulo-principal">Comics</h2>
        { loading ? 
                <center>
                    <Spinner animation="border" variant="danger" role="status" className="mt-5">
                        <span className="visually-hidden"></span>
                    </Spinner>                    
                </center>
            : 
                <ItemList items={items} />
        }
      </div>
    </>
  );
};

export default ItemListContainer;
