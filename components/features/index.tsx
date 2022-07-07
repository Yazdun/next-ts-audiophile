/*-------------------------------------------------------------------
|  React FC Features
|
|  Purpose: RENDERS PRODUCT'S FEATURES ON THE PRODUCT'S PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'

interface IProps {
  text: string
}

export const Features: React.FC<IProps> = ({ text }) => {
  return (
    <div className={css.features}>
      <h2 className={css.title}>Features</h2>
      <p className={css.text}>{text}</p>
    </div>
  )
}
