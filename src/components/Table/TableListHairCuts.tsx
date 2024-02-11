'use client'
import { SwitchContext } from '@/context/SwitchContext';
import { api } from '@/lib/api';
import React, { useContext, useEffect } from 'react'
import { CiMapPin } from "react-icons/ci";
import { HairCutProps } from '@/Interfaces/allInterfaces';
import ModalEditClient from '../Modal/ModalEditHairCuts';

const TableListHairCuts =  () => {

    const { checked } = useContext(SwitchContext);
    const [haircuts, setHaircuts] = React.useState<HairCutProps[]>([]);

    useEffect(() => {
        if (!checked){
            const fetchHairCuts = async () => {
                const response = await api.get('/api/haircuts');
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
                setHaircuts(response.data)
            }
            fetchHairCuts()
        }
    },[checked])


    function formatPrice(price : number){
        return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

  return (
    <div className='flex flex-col px-4 mx-auto gap-4 rounded-lg mt-8'>
        {haircuts.map((haircut) => {
            return (
                <ModalEditClient haircut={haircut} key={haircut.id}>
                    <div key={haircut.id} className='flex w-full py-3 rounded-md px-4 text-white font-semibold bg-[#222433] justify-between'>
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
                </ModalEditClient>
            )
        })}
    </div>
  )
}

export default TableListHairCuts
