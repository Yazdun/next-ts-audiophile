import type { NextPage } from 'next'
import { BannerZX9, Categories, Hero, Layout, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Categories />
        <div style={{ margin: '10.5rem 0', padding: '0 1.4rem' }}>
          <BannerZX9 />
        </div>
      </Layout>
    </>
  )
}

export default Home
