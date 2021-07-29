import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import {useParams} from 'react-router-dom'
import {getList } from '../ItemList'









function ItemListContainer() {
    const [item, setItems] = useState()
    const { categoryId } = useParams()

    useEffect((item) => {
        if(categoryId === undefined){
            getList()
            .then(resp => setItems(resp.filter(it => it.categoria === categoryId)))
        }
        
    }, [categoryId])

    console.log(categoryId);
    return (
        <div>
        <h1 className="titulo-principal">Comics</h1>
        <ItemList/>
        </div>
    )
}
export default ItemListContainer
