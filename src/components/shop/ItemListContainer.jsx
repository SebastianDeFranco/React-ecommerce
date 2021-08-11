import {useState, useEffect} from 'react'
// import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import {useParams} from 'react-router-dom'
// import {getList } from '../ItemList'
// import {itemsPromise} from '../data/data'
import itemsPromise from '../data/data'



export default function ItemListContainer({ greating }) {
    const [prod, setProd] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
    itemsPromise.then((res) => {
        if (categoryId === undefined) {
            setProd(res);
        } else {
            setProd(res.filter((res) => res.categoria === categoryId));
        }
    });
    }, [categoryId]);
    console.log(prod);

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h1 style={{fontFamily:"'Architects Daughter', cursive"}}>{greating}</h1>
            {prod.length < 1 ? <img src="/assets/img/oval.svg" /> : <ItemList items={prod} />}
        </div>
    );
}
