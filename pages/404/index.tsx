import type { NextPage } from 'next'
import { Layout, SEO } from '@components/index'
import { IProduct } from '@models/product'
import css from './styles.module.css'

interface IProps {
  products: IProduct[]
  title: string
}

const NotFound: NextPage<IProps> = () => {
  return (
    <>
      <SEO title="404" desc="Oops ! Not found" />
      <Layout>
        <header className={css.header}>
          <h1>Not found</h1>
          <p>This page does not exist or has been deleted </p>
        </header>
      </Layout>
    </>
  )
}
export default NotFound
