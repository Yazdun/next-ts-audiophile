/*-------------------------------------------------------------------
|  React FC Success
|
|  Purpose: RENDERS SUCCESS MESSAGE AFTER SUBMITING CHECKOUT FORM
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import Link from 'next/link'
import React from 'react'
import css from './styles.module.css'
import { motion } from 'framer-motion'

interface IProps {
  data: any
}

export const Success: React.FC<IProps> = ({ data }) => {
  return (
    <motion.div className={css.container}>
      <h1 className={css.title}>Thanks For Your Purchase</h1>
      <p className={css.info}>
        Hey <strong>{data.name}</strong> ! Your order has been submitted
        successfully. To keep track of your order, follow the instruction which
        has been sent to <strong>{data.email}</strong>
      </p>
      <Link href="/">
        <a className={css.cta}>return to the homepage</a>
      </Link>
    </motion.div>
  )
}
