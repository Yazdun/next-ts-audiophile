import React from 'react'
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
import { Input, Button } from '@components/index'
import css from './styles.module.css'

export const Form: React.FC = () => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(data => console.log(data))}
        className={css.form}
      >
        <h1 style={{ marginTop: '3rem' }}>CHECKOUT</h1>
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
      </form>
    </FormProvider>
  )
}
