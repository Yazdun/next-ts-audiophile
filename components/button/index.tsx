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
  children: React.ReactNode
  href?: string
  maxwidth?: number
}

export const Button: React.FC<IProps> = ({
  primary = true,
  outline,
  transparent,
  children,
  href,
  maxwidth,
}) => {
  const variants = cn(
    css.btn,
    primary && css.primary,
    outline && css.outline,
    transparent && css.transparent,
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
    <button className={variants}>
      {children}
      <MdNavigateNext className={css.icon} />
    </button>
  )
}
