import type { NextPage } from 'next'
import { Layout, SEO } from '@components/index'
import { IProduct } from '@models/product'
import css from './styles.module.css'

interface IProps {
  products: IProduct[]
  title: string
}

const ProductPage: NextPage<IProps> = props => {
  return (
    <>
      <SEO title="Product" />
      <Layout>
        <h1>Product</h1>
      </Layout>
    </>
  )
}

export default ProductPage
