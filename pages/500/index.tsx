import type { NextPage } from 'next'
import { Layout, SEO } from '@components/index'
import { IProduct } from '@models/product'
import css from './styles.module.css'

interface IProps {
  products: IProduct[]
  title: string
}

const ServerError: NextPage<IProps> = () => {
  return (
    <>
      <SEO title="500" desc="Oops ! Server error, our fault" />
      <Layout>
        <header className={css.header}>
          <h1>500 | Server Error</h1>
          <p>Our fault ! we are looking into it</p>
        </header>
      </Layout>
    </>
  )
}
export default ServerError
