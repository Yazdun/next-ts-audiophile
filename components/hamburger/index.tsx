import React from 'react'
import { Squash as BurgerButton } from 'hamburger-react'
import css from './styles.module.css'
import { useState } from 'react'

export const Hamburger: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={css.cta}>
        <BurgerButton size={25} onToggle={() => setOpen(prev => !prev)} />
      </div>
      {open && <div className={css.menu}>HELLOOOO</div>}
    </>
  )
}
