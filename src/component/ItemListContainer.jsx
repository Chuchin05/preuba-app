import ItemCounted from "./ItemCount"
import { useState } from "react"
import ItemList from "./ItemList"
import { useEffect } from "react"
import {getFetch} from "../services/getFetch"

const carrito =(total) =>{
    alert(`La cantidad que agregaste es de ${total} PROductos`)
}

const ItemListContainer= ()=>{
   
//    https://jsonplaceholder.typicode.com/users .... EndPoint
    // const [users,setUsers] = useState([])
    
    // // fetch -async y await
    // const getUsers = async ()=>{
    //     const data = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const dataUsers = await data.json()
    //     console.log(dataUsers);
    // }
    // useEffect(() => {
    //     setTimeout(()=>getUsers(), 2000)
    // }, [])


    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useState()

    useEffect(() => {
        if (id) {
            getFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res.filter(prod => prod.categoria === id ))
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))              
        }else{
            getFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProduct(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))  
        }
    },[id]) 
      
    console.log(id);

    return (
        <div>
            {/* <h1>{dataUsers}</h1> */}
            <ItemList product={product}/>
            <ItemCounted stock={8} initial={1} onAdd={carrito} />
        </div>
    )
}
export default ItemListContainer