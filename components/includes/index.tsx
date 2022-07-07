/*-------------------------------------------------------------------
|  React FC Includes
|
|  Purpose: RENDERS ITEMS IN THE PRODUCT'S BOX ON THE PRODUCT'S PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { IIncludes } from '@models/includes'
import css from './styles.module.css'
import { FiPackage } from 'react-icons/fi'

interface IProps {
  includes: IIncludes[]
}

export const Includes: React.FC<IProps> = ({ includes }) => {
  return (
    <div className={css.card}>
      <div className={css.icon}>
        <FiPackage className={css.package} />
      </div>
      <h2 className={css.title}>in the box</h2>
      <ul className={css.list}>
        {includes.map(i => {
          const { quantity, item } = i
          return (
            <li key={item} className={css.item}>
              <span className={css.quantity}>{quantity}x</span>{' '}
              <span className={css.item_name}>{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
