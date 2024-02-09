import Header from '@/components/Header/Header'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Switch from '@mui/material/Switch';
import TableListHairCuts from '@/components/Table/TableListHairCuts';

const Cortes = () => {

    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };

  return (
    <div>
        <Header/>
        <div className='h-screen bg-[#12131B]'>
            <div className='flex relative gap-8 items-center w-[80%] mx-auto pt-20'>
                <h1 className='text-[#FBB231] text-2xl font-bold'>Modelos de cortes</h1>
                <button className='bg-[#212331] py-2 px-3 rounded-md text-white'><Link href={'/cortes/new'}>Cadastrar novo</Link></button>
                <div className='flex gap-2 absolute right-0 text-white items-center font-bold uppercase'>
                    {/* <h1>{checked ? 'Ativos' : 'Desativados'}</h1>
                    <Switch onChange={handleChange} defaultChecked /> */}
                </div>
            </div>
            <TableListHairCuts/>
        </div>
    </div>
  )
}

export default Cortes
