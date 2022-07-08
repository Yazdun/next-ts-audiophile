import { Form, SEO } from '@components/index'
import { NextPage } from 'next'

const CheckoutPage: NextPage = props => {
  return (
    <>
      <SEO title="Checkout" />
      <Form />
    </>
  )
}

export default CheckoutPage
