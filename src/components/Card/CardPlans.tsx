'use client'
import { api } from '@/lib/api';
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BarberProps } from '@/Interfaces/allInterfaces'
import Notification from '../Notifier/Notification';

interface CardPlansProps {
    premium?: boolean;
    plans: string[];
}

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


const CardPlans = ({premium=false,plans} : CardPlansProps) => {


    const [barber, setBarber] = useState<BarberProps | null>()

    const { data: session, status } = useSession()
    
    const router = useRouter()

    useEffect(() => {
        async function getBarber(){
            const response = await api.get('/api/user')
            setBarber(response.data.user)
        }
        getBarber()
    },[barber?.role])




    const handleUpgradeePremium = async () => {
        console.log('upgrade')
        await api.post('/api/upgradee')
        console.log('upgraded')
        Notification('success', 'Plano atualizado com sucesso')
        router.replace('/planos')
        router.refresh()
    }

    useEffect(() => {
        console.log(barber)
    },[barber])


  return (
    <div className='w-96 h-[330px] flex flex-col bg-[#202130] relative'>
        <h1 className='text-center font-bold text-xl p-5'>
            Plano Grátis
        </h1>
        <div className='flex flex-col font-semibold items-start gap-3 px-10'>
            {plans.map((plan,index) => (
                <ul key={index} className='text-white list-disc items-start'>
                    <li>
                        {plan}
                    </li>
                </ul>
            ))}
        </div>
        {premium ? session?.user.role =='premium' ? (
            <div>
                <Button onClick={handleUpgradeePremium} className='absolute bottom-3 mx-auto left-0 right-0 w-[95%] bg-[#FBA931]'>Voltar para o plano grátis</Button>
            </div>
        ): (
            <Button onClick={handleUpgradeePremium} className='absolute bottom-3 mx-auto left-0 right-0 w-[95%] bg-[#FBA931]'>Assinar premium</Button>
        ) : null}
    </div>
  )
}

export default CardPlans
