import { IProduct } from '@models/product'
import React from 'react'
import './styles.module.css'

interface IProps {
  product: IProduct
}

export const Preview: React.FC<IProps> = ({ product }) => {
  return <div>{product.name}</div>
}
