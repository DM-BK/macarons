import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Grid } from "@mui/material"
import { Products } from "../Products"
import { Product } from '../types'

interface Props {
  allProducts: {color: string}[]
}

export const BoardProducts = ({allProducts}: Props) => {
  //const [products, setProducts] = useState(Array.from({ length: 10 }, (_, index) => ({color: getRandomColor(), left: index * 200})))
  const [arraysProducts, setArraysProducts] = useState<Product[][]>([[]])
  const [infoOfContainer, setInfoOfContainer] = useState({ clientX: -400, clientY: -200, indexFirstEl: 0, indexLastEl: 10, rectLeft: 0, rectRight:0 })
  const currentMouseCoordinates = useRef({ clientX: 0, clientY: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const isCanMove = useRef<boolean>(false)

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

  useEffect(() => {
    let arr: Product[] = []
    const currentProducts = allProducts.reduce((result, item, index) => {
      arr.push({...item, left: arr.length * 200, top: result.length * 200})

      if ((index + 1) % 10 === 0) {
        result.push(arr);
        arr = []
      }

      return result;
    }, [] as any[]);

    setArraysProducts(currentProducts)
  }, [allProducts])

  const handleMouseup = (e: MouseEvent) => {
    isCanMove.current = false
  }

  const handleMousedown = (e: MouseEvent) => {
    isCanMove.current = true

    currentMouseCoordinates.current = {clientX: e.clientX, clientY: e.clientY}
  }

  const handleMousemove = (e: MouseEvent) => {
    if (!isCanMove.current || !containerRef.current) return

    const mouseMoveX = currentMouseCoordinates.current.clientX - e.clientX
    const mouseMoveY = currentMouseCoordinates.current.clientY - e.clientY

    currentMouseCoordinates.current = {clientX: e.clientX, clientY: e.clientY}

    const containerRect = containerRef.current.getBoundingClientRect()
    
    setInfoOfContainer(prev => {
      const clientX = prev.clientX - mouseMoveX
      const clientY = prev.clientY - mouseMoveY
      let indexFirstEl = prev.indexFirstEl
      let indexLastEl = prev.indexLastEl
      let rectLeft = prev.rectLeft
      let rectRight = prev.rectRight

      const containerLeft = containerRect.left + rectLeft
      const containerRight = window.innerWidth - containerRect.right + rectRight

      if (containerLeft > -200) {
        setArraysProducts(prevArraysProducts => prevArraysProducts.map((products, index) => (
          products.map(product => {
            if (index === prev.indexLastEl) return {...product, left: product.left - 2000}

            return product
          })
        )))

        indexFirstEl = indexLastEl
        indexLastEl = indexLastEl === 0 ? 10 : indexLastEl -1

        rectLeft = rectLeft - 200
        rectRight = rectRight + 200
      }

      if (containerRight > -200) {
        setArraysProducts(prevArraysProducts => prevArraysProducts.map((products, index) => (
          products.map(product => {
            if (index === prev.indexFirstEl) return {...product, left: product.left + 2000}

            return product
          })
        )))

        indexLastEl = indexFirstEl
        indexFirstEl = indexFirstEl === 10 ? 0 : indexFirstEl + 1

        rectLeft = rectLeft + 200
        rectRight = rectRight - 200
      }

      return {
        clientX,
        clientY,
        indexFirstEl,
        indexLastEl,
        rectLeft,
        rectRight,
      }
    })
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Grid
        ref={containerRef}
        container 
        sx={{position: 'relative', width: '2000px', height: '100vh'}}
        style={{transform: `translate(${infoOfContainer.clientX}px, ${infoOfContainer.clientY}px)` }}
        >
          {arraysProducts.map((products, i) => (
            <Products key={`products-${i}`} products={products} />
          ))}
        </Grid>
    </Box>
  )
}