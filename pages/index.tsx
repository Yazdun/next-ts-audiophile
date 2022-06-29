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
      <Layout hideCategories>
        <Hero />
        <Categories />
        <Banners />
      </Layout>
    </>
  )
}

export default Home
