import React, { useRef } from 'react'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_background, framer_sidebar } from './framer'
import { useOnClickOutside } from 'usehooks-ts'
import { VscChromeClose } from 'react-icons/vsc'
import { Button } from '@components/index'
import { TiShoppingCart } from 'react-icons/ti'
import Link from 'next/link'

interface IProps {
  fn: any
}

export const Sidebar: React.FC<IProps> = ({ fn }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, fn)

  return (
    <>
      <motion.div
        className={css.background}
        {...framer_background}
      ></motion.div>
      <motion.div className={css.sidebar} {...framer_sidebar} ref={ref}>
        <div className={css.header}>
          <h3>cart</h3>
          <button onClick={fn} className={css.close}>
            <VscChromeClose />
          </button>
        </div>
        <Link href="/checkout">
          <a className={css.link}>
            <TiShoppingCart />
            checkout
          </a>
        </Link>
      </motion.div>
    </>
  )
}
