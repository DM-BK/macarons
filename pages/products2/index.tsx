import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Box } from '@common'
import { Grid } from '@mui/material'
import { Product } from '@components/pages/Products2/Product'

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
  const r = getRandomNumber(0, 255).toString(16).padStart(2, '0')
  const g = getRandomNumber(0, 255).toString(16).padStart(2, '0')
  const b = getRandomNumber(0, 255).toString(16).padStart(2, '0')
  return `#${r}${g}${b}`
}

const Products2 = () => {
  const [products, setProducts] = useState(Array.from({ length: 10 }, (_, index) => ({color: getRandomColor(), left: index * 200})))
  const [containerCoordinates, setContainerCoordinates] = useState({ clientX: -400, clientY: 0 })
  const isCanMove = useRef<boolean>(false)
  const currentMouseCoordinates = useRef({ clientX: 0, clientY: 0 })
  const initialCounter = useRef(containerCoordinates)

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseup)
    window.addEventListener('mousedown', handleMousedown)
    window.addEventListener('mousemove', handleMousemove)

    return () => {
      window.removeEventListener('mouseup', handleMouseup)
      window.removeEventListener('mousedown', handleMousedown)
      window.removeEventListener('mousemove', handleMousemove)
    }
  }, [])

  const handleMouseup = (e: MouseEvent) => {
    isCanMove.current = false
  }

  const handleMousedown = (e: MouseEvent) => {
    isCanMove.current = true

    currentMouseCoordinates.current = {clientX: e.clientX, clientY: e.clientY}
  }

  const handleMousemove = (e: MouseEvent) => {
    if (!isCanMove.current) return

    const mouseMoveX = currentMouseCoordinates.current.clientX - e.clientX
    const mouseMoveY = currentMouseCoordinates.current.clientY - e.clientY

    currentMouseCoordinates.current = {clientX: e.clientX, clientY: e.clientY}

    setContainerCoordinates(prev => {
      const clientX = prev.clientX - mouseMoveX
      const clientY = prev.clientY - mouseMoveY

      // const moveFromInitial = initialCounter.current.clientX - prev.clientX
 
      // if ((moveFromInitial > 0 && moveFromInitial > 200) || (moveFromInitial < 0 && moveFromInitial > -200)) {
      //   if (initialCounter.current.clientX > clientX) {
      //     const newProducts = [...products]
      //     const lastEl = newProducts.pop() as any
      //     lastEl.left = lastEl.left - 2000
      //     console.log('lastEl')
      //     console.log(lastEl.left)
      //     console.log(clientX)
      //     newProducts.unshift(lastEl)
      //     setProducts(newProducts)
  
      //   } else {
      //     const newProducts = [...products]
      //     const firstEl = newProducts.shift() as any
      //     firstEl.left = firstEl.left + 2000
      //     console.log('firstEl')
      //     console.log(clientX)
      //     console.log(firstEl.left)
      //     newProducts.push(firstEl)
      //     setProducts(newProducts)
      //   }
  
      //   initialCounter.current.clientX = clientX
      // }

      return {
        clientX,
        clientY,
      }
    })
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Grid 
        container 
        sx={{position: 'relative', width: '2000px', height: '100vh'}}
        style={{transform: `translate(${containerCoordinates.clientX}px, ${containerCoordinates.clientY}px)` }}
        >
          {products.map((product) => (
            <Product key={product.color} product={product.color} left={product.left} />
          ))}
        </Grid>
    </Box>
  )
}

export default Products2
