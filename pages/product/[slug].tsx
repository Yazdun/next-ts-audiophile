import type { NextPage } from 'next'
import { Layout, Preview, SEO } from '@components/index'
import { GetStaticProps, GetStaticPaths } from 'next'
import { routes } from '@utils/routes'
import { ParsedUrlQuery } from 'querystring'
import { products } from '@data/index'
import { IProduct } from '@models/product'
import css from './styles.module.css'
import { capitalize_first_letter } from '@utils/index'

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
