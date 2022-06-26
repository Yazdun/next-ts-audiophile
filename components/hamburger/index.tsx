import React from 'react'
import { Squash as BurgerButton } from 'hamburger-react'
import css from './styles.module.css'
import { useState } from 'react'
import { categories } from '@utils/index'
import { Category } from '@components/index'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_menu_desktop, framer_menu_mobile } from './framer'
import { useWindowSize, useIsMounted } from '@hooks/index'

export const Hamburger: React.FC = () => {
  const [open, setOpen] = useState(false)
  const isMounted = useIsMounted()
  const { isTouch } = useWindowSize()
  const animations = isTouch ? framer_menu_mobile : framer_menu_desktop

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className={css.cta}>
        <BurgerButton size={25} onToggle={() => setOpen(prev => !prev)} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className={css.wrapper} {...animations}>
            <div className={css.items}>
              {categories.map(cat => (
                <Category category={cat} key={cat.title} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
