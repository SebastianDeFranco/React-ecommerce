import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../servicios/firebaseService';
import ItemList from '../ItemList';
import './ItemListContainer.css';
import { Spinner } from 'react-bootstrap';

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);
//     const db = getFirestore();

//     const itemCollection = db.collection('items');
//     itemCollection
//       .orderBy('price', 'desc')
//       .get()
//       .then((info) => {
//         const prod = info.docs.map((doc) => {
//           return {
//             id: doc.id,
//             ...doc.data(),
//           };
//         });
//         const categorias = prod.filter((i) => i.categoryId === `${id}`);
//         id === undefined ? setItems(prod) : setItems(categorias);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);
//   return (
//     <>
//       <div>
//         <h2 className="titulo-principal">Comics</h2>
//         { loading ? 
//                 <center>
//                     <Spinner animation="border" variant="danger" role="status" className="mt-5">
//                         <span className="visually-hidden"></span>
//                     </Spinner>                    
//                 </center>
//             : 
//                 <ItemList items={items} />
//         }
//       </div>
//     </>
//   );
// };
function ItemListContainer() { 
    const [items, setItems] = useState([])//estado 
    const [loading, setLoading] = useState(true)
    const { categoryId= undefined} = useParams()
    const user = false

    useEffect(() => {

        let db = getFirestore()
        let itemsCollection = db.collection('items')
        const dbQuery = categoryId ?  itemsCollection.where('categoryId', '==', categoryId) : itemsCollection
        dbQuery.get().then(resp => {
            if (resp.size === 0) {
                console.log('No Result!!')
            }
            setItems(resp.docs.map(item=> ({id: item.id, ...item.data()}) ))
        })
        .catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(user){
        return <h1>Login</h1>
    }


    console.log(items);
    return (
        <div>

        { loading ? 
                <center>
                    <Spinner animation="border" variant="danger" role="status" className="mt-5">
                        <span className="visually-hidden"></span>
                    </Spinner>                    
                </center>
            : 
                <ItemList items={items} />
        }
         
         
          {/* <ItemCount /> */}

        
         </div>
        
        
    )
}

export default ItemListContainer;
