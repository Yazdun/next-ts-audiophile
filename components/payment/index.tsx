/*-------------------------------------------------------------------
|  React FC Payment
|
|  Purpose: PAYMENT BUTTONS ON THE `FORM`
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import { FaMoneyCheck, FaMoneyBillAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import cn from 'classnames'

interface IProps {
  EMoney: boolean
  setEMoney: any
}

export const Payment: React.FC<IProps> = ({ EMoney, setEMoney }) => {
  return (
    <motion.div className={css.container} layout>
      <p className={css.title}>Payment Method</p>
      <div className={css.payment}>
        <button
          className={cn(css.cta, EMoney && css.active)}
          onClick={() => setEMoney(true)}
        >
          <FaMoneyCheck />
          e-Money
        </button>
        <button
          className={cn(css.cta, !EMoney && css.active)}
          onClick={() => {
            setEMoney(false)
          }}
        >
          <FaMoneyBillAlt />
          Cash on Delivery
        </button>
      </div>
    </motion.div>
  )
}
