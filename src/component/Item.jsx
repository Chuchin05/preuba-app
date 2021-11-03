import Button from "@restart/ui/esm/Button"
import React from "react"


const Item = ({prod})=>{
    // aca se reciben las porps
    return( 
        // renderizar ñps datos q lleguen por porpS
        // renderizo el id
        // renderi<o el user
        // renderizo el mail
        // renderizo la ciudad
        <div className="card w-25 mt-5" >
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

    </div>
    )
}
export default Item