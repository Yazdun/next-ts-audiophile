import type { NextPage } from 'next'
import { Button, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div style={{ padding: 200 }}>
        <Button outline>see product</Button>
        <Button>see product</Button>
      </div>
    </>
  )
}

export default Home
