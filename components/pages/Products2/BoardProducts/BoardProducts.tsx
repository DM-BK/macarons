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
  const [infoOfContainer, setInfoOfContainer] = useState({ 
    clientX: -400, 
    clientY: -400, 
    indexLeftEl: 0, 
    indexRightEl: 10, 
    rectLeft: 0, 
    rectRight:0,
    indexTopRow: 0, 
    indexBottomRow: 8, 
    rectTop: 0, 
    rectBottom:0,
  })
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
      // left / right
      let indexLeftEl = prev.indexLeftEl
      let indexRightEl = prev.indexRightEl
      let rectLeft = prev.rectLeft
      let rectRight = prev.rectRight

      const containerLeft = containerRect.left + rectLeft
      const containerRight = window.innerWidth - containerRect.right + rectRight

      if (containerLeft > -200) {
        setArraysProducts(prevArraysProducts => prevArraysProducts.map((products) => (
          products.map((product, productIndex) => {
            if (productIndex === prev.indexRightEl) return {...product, left: product.left - 2000}

            return product
          })
        )))

        indexLeftEl = indexRightEl
        indexRightEl = indexRightEl === 0 ? 10 : indexRightEl -1

        rectLeft = rectLeft - 200
        rectRight = rectRight + 200
      }

      if (containerRight > -200) {
        setArraysProducts(prevArraysProducts => prevArraysProducts.map((products) => (
          products.map((product, productIndex) => {
            if (productIndex === prev.indexLeftEl) return {...product, left: product.left + 2000}

            return product
          })
        )))

        indexRightEl = indexLeftEl
        indexLeftEl = indexLeftEl === 10 ? 0 : indexLeftEl + 1

        rectLeft = rectLeft + 200
        rectRight = rectRight - 200
      }

      // top / bottom
      let indexTopRow = prev.indexTopRow
      let indexBottomRow = prev.indexBottomRow
      let rectTop = prev.rectTop
      let rectBottom = prev.rectBottom

      const containerTop = containerRect.top + rectTop
      const containerBottom = window.innerHeight - containerRect.bottom + rectBottom

      if (containerTop > -200) {
        setArraysProducts(prevArraysProducts => prevArraysProducts.map((products, index) => {
          if (index === prev.indexBottomRow) return products.map(product => ({...product, top: product.top - 1600}))

          return products
        }))

        indexTopRow = indexBottomRow
        indexBottomRow = indexBottomRow === 0 ? 8 : indexBottomRow -1

        rectTop = rectTop - 200
        rectBottom = rectBottom + 200
      }

      if (containerBottom > -200) {
        setArraysProducts(prevArraysProducts => prevArraysProducts.map((products, index) => {
          if (index === prev.indexTopRow) return products.map(product => ({...product, top: product.top + 1600}))

          return products
        }))

        indexBottomRow = indexTopRow
        indexTopRow = indexTopRow === 8 ? 0 : indexTopRow + 1

        rectTop = rectTop + 200
        rectBottom = rectBottom - 200
      }

      const clientX = prev.clientX - mouseMoveX
      const clientY = prev.clientY - mouseMoveY

      return {
        clientX,
        clientY,
        indexLeftEl,
        indexRightEl,
        rectLeft,
        rectRight,
        indexTopRow,
        indexBottomRow,
        rectTop,
        rectBottom
      }
    })
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Grid
        ref={containerRef}
        container 
        sx={{position: 'relative', width: '2000px', height: '1600px'}}
        style={{transform: `translate(${infoOfContainer.clientX}px, ${infoOfContainer.clientY}px)` }}
        >
          {arraysProducts.map((products, i) => (
            <Products key={`products-${i}`} products={products} />
          ))}
        </Grid>
    </Box>
  )
}