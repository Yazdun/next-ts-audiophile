/*-------------------------------------------------------------------
|  React FC Navigations
|
|  Purpose:  NAVIGATION'S LINKS FOR DESKTOP TOPBAR.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { routes } from '@utils/index'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import css from './styles.module.css'
import cn from 'classnames'

export const Navigations = () => {
  const router = useRouter()
  console.log(router)

  return (
    <ul className={css.list}>
      {routes.map(route => {
        const { title, slug } = route
        return (
          <li key={title}>
            <Link href={slug}>
              <a
                className={cn(
                  css.link,
                  router.query.slug === title && css.disable,
                  router.pathname === '/' && slug === '/' && css.disable,
                )}
              >
                {title}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
