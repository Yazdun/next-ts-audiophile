import type { NextPage } from 'next'
import {
  Banners,
  Categories,
  Hero,
  Layout,
  SEO,
  Gear,
  Footer,
} from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Categories />
        <Banners />
        <Gear />
      </Layout>
      <Footer />
    </>
  )
}

export default Home
