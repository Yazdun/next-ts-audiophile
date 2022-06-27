import type { NextPage } from 'next'
import { Hero, Layout, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

export default Home
