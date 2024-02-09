import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.svg'
import FormRegister from '@/components/Form/FormRegister'

const Register = () => {
  return (
    <div className='bg-[#12131B] pt-32 h-screen'>
        <div className='w-[50%] mx-auto flex flex-col items-center'>
            <Image priority={true} src={logo} alt="Logo loja" width={280} height={117} />
            <div>
                <FormRegister/>
            </div>
        </div>
    </div>
  )
}

export default Register
