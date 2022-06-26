import React from 'react'
import { Squash as BurgerButton } from 'hamburger-react'
import css from './styles.module.css'

export const Hamburger: React.FC = () => {
  return (
    <div>
      <div className={css.cta}>
        <BurgerButton size={25} />
      </div>
    </div>
  )
}
