import { useState } from "react"
import { Button,FormControl } from "react-bootstrap"
// import { InputGroup } from "react-bootstrap"
import React from "react"


const ItemCounted =({initial, stock ,onAdd})=>{
    
    const [count,setCount] =useState((initial))
    
    const disminuirCount = ()=>{
        count > 1 ? setCount(count - 1) : alert("Debe elegir al menos 1 producto")
    }

    const aumentarCount = ()=>{
        count<parseInt(stock) ? setCount(count + 1) : alert(`El Stock es de ${stock} productos rey`)
        console.log("Agregue una producto");
    }
    
    return(
        <>
                  <Button variant="warning" onClick={disminuirCount} disabled ={count < 1}>-</Button>
                  <FormControl className="Text-center" aria-label="Example text with two button addons" value={count}/>
                  <Button variant="warning" onClick={aumentarCount}>+</Button>
                  <hr />
                  <Button variant="primary" onClick={()=>onAdd(count)}>Agreagar al carrito</Button> 
                  
                </>
    )
}
export default ItemCounted