import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import {useParams} from 'react-router-dom'
import {getItem} from '../details/getMocks';


// import getItems from '../ItemList'





function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        
        if(categoryId === undefined){
            getItem()
            .then(resp => setItems)
        }else{
            getItem()
            .then(resp => setItems(resp.filter(it => it.categoria === categoryId)))
        }
        
    }, [])

    console.log(categoryId);
    return (
        <div>
        <h1 className="titulo-principal">Comics</h1>
        <ItemList item={items}/>
        </div>
    )
}
export default ItemListContainer
