import type { NextPage } from 'next'
import { Input, SEO } from '@components/index'
import { useForm, FormProvider } from 'react-hook-form'
import { email_validation } from '@utils/index'
const Home: NextPage = () => {
  const methods = useForm()

  return (
    <>
      <SEO />
      <div style={{ padding: 100, marginTop: 200 }}>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(data => console.log(data))}
            noValidate
          >
            <Input {...email_validation} />
            <button>submit</button>
          </form>
        </FormProvider>
      </div>
    </>
  )
}

export default Home
