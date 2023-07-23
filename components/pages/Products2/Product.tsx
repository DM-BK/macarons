import { Box } from '@common'
import { useEffect } from 'react'

interface Props {
  product: string
  left: number
}

export const Product = ({ product, left }: Props) => {
  useEffect(() => {

  }, [])

  return (
    <Box sx={{ background: product, width: 200, height: 200, position: 'absolute', left: left + 'px' }}>
      {' '}
    </Box>
  )
}
