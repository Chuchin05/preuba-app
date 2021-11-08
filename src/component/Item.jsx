import Button from "@restart/ui/esm/Button"
import React from "react"
import ItemCounted from "./ItemCount"
const carrito =(total) =>{
    alert(`La cantidad que agregaste es de ${total} PROductos`)
}

const Item = ({prod})=>{
    return( 
        
        <div className="card w-22 mt-1" >
        <div className="card-header">
            {`${prod.name} - ${prod.categoria}`}
        </div>
        <div className="card-body">
            <img src={prod.foto} alt=''  />
            
            {prod.price}
            
        </div>
        <div className="card-footer">
            <Button to={`/detalle/${prod.id}`}>
                <button className="btn btn-outline-primary btn-block">
                    detalle del producto
                </button>
            </Button>
        </div>
        <ItemCounted initial={1} stock={8} onAdd={carrito}/>
    </div>
    )
}
export default Item