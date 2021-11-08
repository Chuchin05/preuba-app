import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useEffect,useState } from 'react'
import { getFetch } from '../services/getFetch'

export const ItemDetailContainer = () => {
    const [prod,setProd] = useState ()
        useEffect(() => {
        
            getFetch
            .then( res => {        
                console.log('llamada a api') // alguna accion con la respuesta  
                setProd(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> console.log(false))                
        
    },[]) 
    console.log(prod)
    return (
        <div>

            {/* <ItemDetail/> */}
        </div>
    )
}
