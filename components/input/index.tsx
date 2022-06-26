import React from 'react'
import css from './styles.module.css'
import cn from 'classnames'
import { is_input_valid, find_input_error } from '@utils/index'
import { useFormContext } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { framer_error } from './framer'

interface IProps {
  name: string
  label: string
  type: string
  id: string
  placeholder: string
  validation?: object
}

export const Input: React.FC<IProps> = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors: any = find_input_error(errors, name)
  const isInvalid: boolean = is_input_valid(inputErrors)

  return (
    <div className={cn(css.container)}>
      <div className={css.head}>
        <label htmlFor={id} className={css.label}>
          {label}
        </label>
        <AnimatePresence exitBeforeEnter initial={false}>
          {isInvalid && (
            <motion.p
              className={css.error}
              {...framer_error}
              key={inputErrors.error.message}
            >
              {inputErrors.error.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type={type}
        className={css.input}
        placeholder={placeholder}
        {...register(`${name}`, validation)}
      />
    </div>
  )
}
