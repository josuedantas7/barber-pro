import FormEditProfile from '@/components/Form/FormEditProfile'
import Header from '@/components/Header/Header'
import React from 'react'

const MyProfile = () => {
  return (
    <div>
        <Header/>
        <div className='h-screen bg-[#12131B] text-white'>
            <div className='flex flex-col gap-8 items-center w-[80%] mx-auto pt-20'>
                <h1 className='text-[#FBB231] text-2xl font-bold'>My profile</h1>
                <div className='w-full p-7 bg-[#202130]'>
                    <FormEditProfile/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile
