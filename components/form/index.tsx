/*-------------------------------------------------------------------
|  React FC Form
|
|  Purpose: RENDERS CHECKOUT FORM
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  address_validation,
  city_validation,
  country_validation,
  email_validation,
  money_validation,
  name_validation,
  phone_validation,
  pin_validation,
  zip_validation,
} from '@utils/input_validators'
import { useForm, FormProvider } from 'react-hook-form'
import { CartPreview, Input, Payment } from '@components/index'
import { FiCheck } from 'react-icons/fi'
import css from './styles.module.css'
import { useCart } from '@context/index'

interface IProps {
  setSuccess: any
}

export const Form: React.FC<IProps> = ({ setSuccess }) => {
  const methods = useForm()
  const [EMoney, setEMoney] = useState(false)
  const { clearCart } = useCart()

  useEffect(() => {
    if (!EMoney) {
      methods.unregister('pin')
      methods.unregister('money')
    }
  }, [EMoney])

  return (
    <div className={css.container}>
      <CartPreview />
      <FormProvider {...methods}>
        <form className={css.form} onSubmit={e => e.preventDefault()}>
          <div className={css.card}>
            <h2 className={css.title}>billing details</h2>
            <div className={css.section}>
              <Input {...name_validation} />
              <Input {...email_validation} />
              <Input {...phone_validation} />
            </div>
          </div>

          <div className={css.card}>
            <h2 className={css.title}>shipping info</h2>
            <div className={css.section}>
              <div className={css.address}>
                <Input {...address_validation} />
              </div>
              <Input {...zip_validation} />
              <Input {...city_validation} />
              <Input {...country_validation} />
            </div>
          </div>

          <motion.div className={css.card} layout>
            <Payment EMoney={EMoney} setEMoney={setEMoney} />
            {EMoney && (
              <motion.div layout className={css.section}>
                <Input {...money_validation} />
                <Input {...pin_validation} />
              </motion.div>
            )}

            <motion.button
              layout
              onClick={methods.handleSubmit(data => {
                setSuccess(data)
                clearCart()
              })}
              className={css.btn}
              disabled={
                Object.keys(methods.formState.errors).length === 0
                  ? false
                  : true
              }
            >
              <FiCheck />
              continue and pay
            </motion.button>
          </motion.div>
        </form>
      </FormProvider>
    </div>
  )
}
