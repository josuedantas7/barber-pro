import Header from '@/components/Header/Header'
import Link from 'next/link'
import React, { useEffect } from 'react'
import TableListHairCuts from '@/components/Table/TableListHairCuts';
import SwitchComponent from '@/components/Switch/Switch';

const Cortes = () => {

  return (
    <div>
        <Header/>
        <div className='h-screen bg-[#12131B]'>
            <div className='flex relative gap-8 items-center w-[80%] mx-auto pt-20'>
                <h1 className='text-[#FBB231] text-2xl font-bold'>Modelos de cortes</h1>
                <button className='bg-[#212331] py-2 px-3 rounded-md text-white'><Link href={'/cortes/new'}>Cadastrar novo</Link></button>
                <div className='flex gap-2 absolute right-0 text-white items-center font-bold uppercase'>
                    <SwitchComponent/>
                </div>
            </div>
            <TableListHairCuts/>
        </div>
    </div>
  )
}

export default Cortes
