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

  return (
    <ul className={css.list}>
      {routes.map(route => {
        const { title, slug } = route

        const isCurrent = router.query.slug === title
        const isCategory = router.query.slug?.includes(title)
        const isSubCategory = router.query.slug?.includes(
          title.substring(0, title.length - 1),
        )

        return (
          <li key={title}>
            <Link href={slug}>
              <a
                className={cn(
                  css.link,
                  isCurrent && css.active,
                  isCategory && css.active,
                  isSubCategory && css.active,
                  router.pathname === '/' && slug === '/' && css.active,
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
