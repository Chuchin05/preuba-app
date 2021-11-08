// import { useState } from "react"
import Item from "./Item"
import React from "react"

function ItemList({product}){
return(
    
    product.map(prod=> <Item key={prod.id} prod={prod}/>)
)
}

export default ItemList