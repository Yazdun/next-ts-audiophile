import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Layout, SEO } from '@components/index'
import { IProduct } from '@models/product'
import css from './styles.module.css'
import { products } from '@data/index'
import { ParsedUrlQuery } from 'querystring'

interface IProps {
  product: IProduct
}

const ProductPage: NextPage<IProps> = props => {
  const { product } = props
  return (
    <>
      <SEO title="Product" />
      <Layout>
        <div className={css.container}>
          <h1>{product.name}</h1>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(product => {
    return {
      params: { slug: product.slug || '' },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams
  const data = products.find(product => product.slug === slug)
  return {
    props: { product: data },
  }
}

export default ProductPage
