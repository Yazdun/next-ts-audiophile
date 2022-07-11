import { Form, SEO } from '@components/index'
import { useCart } from '@context/index'
import { NextPage } from 'next'
import css from './styles.module.css'
import { ImSpinner2 } from 'react-icons/im'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

const CheckoutPage: NextPage = props => {
  const { cart } = useCart()
  const noCart = !cart || cart.length === 0

  useEffect(() => {
    if (noCart) {
      Router.push('/')
    }
  }, [])

  if (noCart) {
    return (
      <>
        <SEO title="Loading" />
        <main className={css.loading}>
          <ImSpinner2 className={css.spinner} />
        </main>
      </>
    )
  }

  return (
    <>
      <SEO title="Checkout" />
      <main className={css.main}>
        <div className={css.back}>
          <button onClick={() => Router.back()}>
            <BiArrowBack />
            back to the shop
          </button>
        </div>
        <Form />
      </main>
    </>
  )
}

export default CheckoutPage
