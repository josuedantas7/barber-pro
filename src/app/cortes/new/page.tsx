import FormRegisterHairCuts from '@/components/Form/FormRegisterHairCuts'
import Header from '@/components/Header/Header'
import React from 'react'

const NovoCorte = () => {
  return (
    <div>
        <Header/>
        <div className='h-screen bg-[#12131B]'>
            <div className='flex relative gap-8 items-center w-[80%] mx-auto pt-20'>
                <h1 className='text-[#FBB231] text-2xl font-bold'>Modelos de cortes</h1>
            </div>
            <FormRegisterHairCuts/>
        </div>
    </div>
  )
}

export default NovoCorte
