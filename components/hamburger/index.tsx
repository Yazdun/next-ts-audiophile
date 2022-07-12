/*-------------------------------------------------------------------
|  React FC Hamburger
|
|  Purpose:  HAMBURGER MENU FOR MOBILE AND TABLET.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React, { useEffect, useRef } from 'react'
import { Squash as BurgerButton } from 'hamburger-react'
import css from './styles.module.css'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_menu } from './framer'
import { useOnClickOutside } from 'usehooks-ts'
import { routes } from '@utils/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

export const Hamburger: React.FC = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const router = useRouter()

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div ref={ref} className={css.container}>
      <div className={css.cta}>
        <BurgerButton
          size={25}
          toggled={open}
          toggle={setOpen}
          hideOutline={false}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul className={css.list} {...framer_menu}>
            {routes.map(route => {
              const { Icon, slug, title } = route

              const isCurrent = router.query.slug === title
              const isCategory = router.query.slug?.includes(title)
              const isSubCategory = router.query.slug?.includes(
                title.substring(0, title.length - 1),
              )
              return (
                <li key={route.title}>
                  <Link href={slug}>
                    <a
                      className={cn(
                        css.link,
                        isCurrent && css.active,
                        isCategory && css.active,
                        isSubCategory && css.active,
                        router.pathname === '/' && slug === '/' && css.active,
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {title}
                      <Icon className={css.icon} />
                    </a>
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
