import type { NextPage } from 'next'
import { Categories, Hero, Layout, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Categories />
      </Layout>
    </>
  )
}

export default Home
