import { Form, SEO, Success } from '@components/index'
import { useCart } from '@context/index'
import { NextPage } from 'next'
import css from './styles.module.css'
import { ImSpinner2 } from 'react-icons/im'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import cn from 'classnames'

const CheckoutPage: NextPage = props => {
  const { cart } = useCart()
  const [success, setSuccess] = useState(false)
  const noCart = !cart || cart.length === 0

  useEffect(() => {
    if (noCart) {
      Router.push('/')
    }
  }, [])

  if (noCart && !success) {
    return (
      <>
        <main className={css.loading}>
          <ImSpinner2 className={css.spinner} />
        </main>
      </>
    )
  }

  return (
    <>
      <SEO title="Checkout" />
      <main className={cn(success ? css.success : css.main)}>
        {success ? (
          <Success data={success} />
        ) : (
          <div className={css.forms}>
            <Back />
            <Form setSuccess={setSuccess} />
          </div>
        )}
      </main>
    </>
  )
}

const Back = () => {
  return (
    <div className={css.back}>
      <button onClick={() => Router.back()}>
        <BiArrowBack />
        back to the shop
      </button>
    </div>
  )
}

export default CheckoutPage
