import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Box } from '@common'
import { BoardProducts } from '@components/pages/Products2/BoardProducts'

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomColor() {
  const r = getRandomNumber(0, 255).toString(16).padStart(2, '0')
  const g = getRandomNumber(0, 255).toString(16).padStart(2, '0')
  const b = getRandomNumber(0, 255).toString(16).padStart(2, '0')
  return `#${r}${g}${b}`
}

const DB_products = Array.from({ length: 80 }, _ => ({color: getRandomColor()}))

const Products2 = () => {

  return (
    <BoardProducts allProducts={DB_products} />
  )
}

export default Products2
