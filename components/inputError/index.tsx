/*-------------------------------------------------------------------
|  React FC InputError
|
|  Purpose:  SHOWS ERRORS WHERE AN INPUT IS INVALID
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { motion } from 'framer-motion'
import { framer_error } from './framer'
import css from './styles.module.css'

interface IProps {
  message: string
}

export const InputError: React.FC<IProps> = ({ message }) => {
  return (
    <motion.p className={css.error} {...framer_error}>
      {message}
    </motion.p>
  )
}
