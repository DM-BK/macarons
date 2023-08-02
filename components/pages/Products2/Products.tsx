import { useEffect } from 'react'
import { Box } from '@common'

import { Product } from './types'

interface Props {
  products: Product[]
}

export const Products = ({ products }: Props) => {
  useEffect(() => {}, [])

  return (
    <>
      {products.map((product) => (
        <div 
          key={product.color} 
          style={{ 
            position: 'absolute', 
            left: product.left + 'px', 
            top: product.top 
          }}
        >
          <Box sx={{ background: product.color, width: 200, height: 200 }}> </Box>
        </div>
      ))}
    </>
  )
}
