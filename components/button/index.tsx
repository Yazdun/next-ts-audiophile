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
  return (
    <button
      className={cn(
        css.btn,
        primary && css.primary,
        outline && css.outline,
        transparent && css.transparent,
      )}
    >
      {children}
    </button>
  )
}
