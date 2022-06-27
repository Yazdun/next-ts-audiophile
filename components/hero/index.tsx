/*-------------------------------------------------------------------
|  React FC Hero
|
|  Purpose:  LANDING PAGE'S HERO SECTION.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'

export const Hero: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.cover}></div>
      <div className={css.container}>Hero</div>
    </div>
  )
}
