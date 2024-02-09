'use client'
import { SwitchContext } from '@/context/SwitchContext';
import { api } from '@/lib/api';
import prisma from '@/lib/db';
import React, { useContext, useEffect } from 'react'
import { CiMapPin } from "react-icons/ci";
import { HairCutProps } from '@/Interfaces/allInterfaces';

const TableListHairCuts =  () => {

    const { checked } = useContext(SwitchContext);
    const [haircuts, setHaircuts] = React.useState<HairCutProps[]>([]);

    useEffect(() => {
        if (!checked){
            const fetchHairCuts = async () => {
                const response = await api.get('/api/haircuts');
                console.log(response.data)
                setHaircuts(response.data)
            }
            fetchHairCuts()
        } else {
            const fetchHairCuts = async () => {
                const response = await api.get('/api/haircuts', {
                    params: {
                        checked: checked
                    }
                })
                console.log(response.data)
                setHaircuts(response.data)
            }
            fetchHairCuts()
        }
    },[checked])


    function formatPrice(price : number){
        return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

  return (
    <div className='flex flex-col w-[80%] mx-auto gap-4 rounded-lg mt-8'>
        {haircuts.map((haircut) => {
            return (
                <div key={haircut.id} className='flex py-3 rounded-md px-4 text-white font-semibold bg-[#222433] justify-between'>
                    <div className='flex items-center gap-4'>
                        <CiMapPin className='text-[#FBB231] text-2xl'/>
                        <div>
                            <h1>{haircut.name}</h1>
                        </div>
                    </div>
                    <div>
                        <h1>{formatPrice(haircut.price)}</h1>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default TableListHairCuts
