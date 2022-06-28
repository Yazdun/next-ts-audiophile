import type { NextPage } from 'next'
import { Banners, Categories, Hero, Layout, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Categories />
        <Banners />
      </Layout>
    </>
  )
}

export default Home
