import React, { useState } from 'react'
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

export const Form: React.FC = () => {
  const methods = useForm()
  const [EMoney, setEMoney] = useState(false)

  console.log(methods.formState.errors)

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

            <button
              onClick={methods.handleSubmit(data => console.log(data))}
              className={css.btn}
              disabled={
                Object.keys(methods.formState.errors).length === 0
                  ? false
                  : true
              }
            >
              <FiCheck />
              continue and pay
            </button>
          </motion.div>
        </form>
      </FormProvider>
    </div>
  )
}
