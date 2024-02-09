import React from 'react'
import logo from '@/app/assets/logo.svg'
import Image from 'next/image'
import FormLogin from '@/components/Form/FormLogin'

const Login = () => {
  return (
    <div className='bg-[#12131B] pt-32 h-screen'>
        <div className='w-[50%] mx-auto flex flex-col items-center'>
            <Image priority={true} src={logo} alt="Logo loja" width={280} height={117} />
            <div>
                <FormLogin/>
            </div>
        </div>
    </div>
  )
}

export default Login
