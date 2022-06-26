import type { NextPage } from 'next'
import { Button, SEO } from '@components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <div style={{ padding: 100, marginTop: 200 }}>
        <Button transparent href="shop">
          see product
        </Button>
      </div>
    </>
  )
}

export default Home
