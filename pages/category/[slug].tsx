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

const Home: NextPage<IProps> = props => {
  const title = capitalize_first_letter(props.title)

  return (
    <>
      <SEO
        title={title}
        desc={`Browse exceptional high quality ${props.title} on AudioPhile`}
      />
      <Layout>
        <div className={css.head}>
          <h1 className={css.title}>{props.title}</h1>
        </div>
        <div className={css.container}>
          {props.products
            .filter(product => product.new)
            ?.map(product => (
              <Preview product={product} key={product.name} />
            ))}
          {props.products
            .filter(product => !product.new)
            ?.map(product => (
              <Preview product={product} key={product.name} />
            ))}
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes
    .filter(route => route.title !== 'home')
    .map(route => {
      return {
        params: { slug: route.title || '' },
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
  const data = products.filter(product => product.category === slug)
  return {
    props: { products: data, title: slug },
  }
}

export default Home
