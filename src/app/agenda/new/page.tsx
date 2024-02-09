import FormRegisterClient from '@/components/Form/FormRegisterClient'
import Header from '@/components/Header/Header'

const NewClient = () => {

  return (
    <div className='h-screen bg-[#12131B]'>
        <Header/>
        <div className='mt-8'>
            <FormRegisterClient/>
        </div>
    </div>
  )
}

export default NewClient
