/*-------------------------------------------------------------------
|  React FC Navigations
|
|  Purpose:  NAVIGATION'S LINKS FOR DESKTOP TOPBAR.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { routes } from '@utils/index'
import Link from 'next/link'
import React from 'react'
import css from './styles.module.css'

export const Navigations = () => {
  return (
    <ul className={css.list}>
      {routes.map(route => {
        const { title, slug } = route
        return (
          <li key={title}>
            <Link href={slug}>
              <a className={css.link}>{title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
