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
import { framer_menu_desktop, framer_menu_mobile } from './framer'
import { useWindowSize, useIsMounted } from '@hooks/index'
import { useOnClickOutside } from 'usehooks-ts'
import { Categories } from '@components/index'

export const Hamburger: React.FC = () => {
  const [open, setOpen] = useState(false)
  const isMounted = useIsMounted()
  const { isTouch } = useWindowSize()
  const ref = useRef(null)
  const animations = isTouch ? framer_menu_mobile : framer_menu_desktop

  useOnClickOutside(ref, () => setOpen(false))

  useEffect(() => {
    setOpen(false)
  }, [isTouch])

  if (!isMounted) {
    return null
  }

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
          <motion.div className={css.wrapper} {...animations}>
            <Categories />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
