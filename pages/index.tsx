import type { NextPage } from 'next'
import { Button, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div style={{ padding: 200 }}>
        <Button transparent>shop</Button>
      </div>
    </>
  )
}

export default Home
