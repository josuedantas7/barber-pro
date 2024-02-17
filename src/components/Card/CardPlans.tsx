import { Button } from '@mui/material'
import React from 'react'

interface CardPlansProps {
    premium?: boolean;
    plans: string[];
}

const CardPlans = ({premium=false,plans} : CardPlansProps) => {

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
        {premium && (
            <Button className='absolute bottom-3 mx-auto left-0 right-0 w-[95%] bg-[#FBA931]'>Ver planos</Button>
        )}
    </div>
  )
}

export default CardPlans
