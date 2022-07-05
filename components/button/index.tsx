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
import Link from 'next/link'

interface IProps {
  primary?: boolean
  outline?: boolean
  transparent?: boolean
  dark?: boolean
  children: React.ReactNode
  href?: string
  maxwidth?: number
  onClick?: any
  disabled?: boolean
}

export const Button: React.FC<IProps> = ({
  primary = true,
  outline,
  transparent,
  dark,
  children,
  href,
  maxwidth,
  onClick,
  disabled,
}) => {
  const variants = cn(
    css.btn,
    primary && css.primary,
    outline && css.outline,
    transparent && css.transparent,
    dark && css.dark,
    href && css.href,
  )

  if (href) {
    return (
      <Link href={href}>
        <a
          className={variants}
          style={{ maxWidth: maxwidth ? maxwidth : '100%' }}
        >
          {children}
          <MdNavigateNext className={css.icon} />
        </a>
      </Link>
    )
  }

  return (
    <button
      className={variants}
      onClick={onClick}
      disabled={disabled}
      style={{ maxWidth: maxwidth ? maxwidth : '100%' }}
    >
      {children}
      <MdNavigateNext className={css.icon} />
    </button>
  )
}
