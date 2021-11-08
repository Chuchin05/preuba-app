import React from 'react'

import { Card,ListGroup,ListGroupItem } from 'react-bootstrap'
import Item from './Item'

export const ItemDetail = ({product}) => {
    return (
        product.map(prod=> <Item key={prod.id} prod={prod}/>)                
    )
}
