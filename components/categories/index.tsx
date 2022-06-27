/*-------------------------------------------------------------------
|  React FC Categories
|
|  Purpose:  RENDERS DIFFERENT TYPES OF CATEGORIES BASED ON GIVEN DATA.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Category } from '@components/index'
import css from './styles.module.css'
import { categories } from '@utils/index'

export const Categories: React.FC = () => {
  return (
    <div className={css.items}>
      {categories.map(cat => (
        <Category category={cat} key={cat.title} />
      ))}
    </div>
  )
}
