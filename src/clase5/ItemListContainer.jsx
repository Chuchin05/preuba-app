
// import React from "react";
// import ItemCount from "./ItemCount";
// import { Card } from "react-bootstrap";
// import {Alert, Button, } from "react-bootstrap"
// import { useState } from "react";
// import { CardBody, CardText, CardTitle } from "reactstrap";

//        export default function ItemListContainer() {       
//             return (
              
//                 <ItemCount stock = {8} initial={2}/>
                  
//             )
        
    
//     }
import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer ({gretting}){
    const carrito =(total) =>{
        alert(`La cantidad que agregaste es de ${total} PROductos`)
    }
    return(
        <div>
            {gretting}
            <ItemCount stock={8} initial={1} onAdd={carrito}/>
            
        </div>
    )
}