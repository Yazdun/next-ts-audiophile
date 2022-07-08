import { Form, SEO } from '@components/index'
import { NextPage } from 'next'
import css from './styles.module.css'

const CheckoutPage: NextPage = props => {
  return (
    <>
      <SEO title="Checkout" />
      <main className={css.main}>
        <Form />
      </main>
    </>
  )
}

export default CheckoutPage
