import type { NextPage } from 'next'
import { Categories, Hero, Layout, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <div style={{ marginTop: '10rem' }}>
          <Categories />
        </div>
      </Layout>
    </>
  )
}

export default Home
