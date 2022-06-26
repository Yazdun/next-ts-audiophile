import React from 'react'
import { Hamburger, Cart } from '@components/index'
import css from './styles.module.css'
import Image from 'next/image'
import { project_logo } from '@assets/shared/desktop/index'

export const Topbar: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <Hamburger />
        <Image src={project_logo} alt="audiophile" />
        <Cart />
      </nav>
    </div>
  )
}
