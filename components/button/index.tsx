/*-------------------------------------------------------------------
|  React FC Button
|
|  Purpose:  DIFFRENET BUTTON VARIATIONS.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import cn from 'classnames'
import { MdNavigateNext } from 'react-icons/md'

interface IProps {
  primary?: boolean
  outline?: boolean
  transparent?: boolean
  children: React.ReactNode
}

export const Button: React.FC<IProps> = ({
  primary = true,
  outline,
  transparent,
  children,
}) => {
  const variants = cn(
    css.btn,
    primary && css.primary,
    outline && css.outline,
    transparent && css.transparent,
  )

  return (
    <button className={variants}>
      {children}
      <MdNavigateNext className={css.icon} />
    </button>
  )
}
