import type { NextPage } from 'next'
import { SEO, Topbar } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div>
        <Topbar />
      </div>
    </>
  )
}

export default Home
