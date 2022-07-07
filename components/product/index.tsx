/*-------------------------------------------------------------------
|  React FC Product
|
|  Purpose: THIS COMPONENT RENDERS THE WHOLE PRODUCT'S INFO ON THE 
|           PRODUCT'S PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IProduct } from '@models/product'
import React from 'react'
import css from './styles.module.css'
import {
  Showcase,
  Features,
  Includes,
  Gallery,
  Suggestion,
} from '@components/index'

interface IProps {
  product: IProduct
}

export const Product: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <div className={css.container}>
        <Showcase product={product} />
        <Features text={product.features} />
        <Includes includes={product.includes} />
        <Gallery gallery={product.gallery} />
        <div className={css.suggestions}>
          <h2 className={css.title}>you may also like</h2>
          <ul className={css.others}>
            {product.others.map(sug => {
              return <Suggestion suggestion={sug} key={sug.name} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
