import React from 'react'
import { Card1 } from './Card1'
import { Card2 } from './Card2'

export const ProductRowCard = ({productRow,index}) => {
  return (
    <div>
        {
            productRow.id =="0" ? <Card1 productRow={productRow}/> :<Card2 productRow={productRow} index={index}/>
        }
    </div>
  )
}
