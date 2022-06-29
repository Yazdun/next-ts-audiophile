import type { NextPage } from 'next'
import { Layout, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <h1>Category</h1>
      </Layout>
    </>
  )
}

export default Home
