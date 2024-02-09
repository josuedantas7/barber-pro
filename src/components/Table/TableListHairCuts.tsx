import prisma from '@/lib/db';
import React from 'react'
import { CiMapPin } from "react-icons/ci";

const TableListHairCuts =  async () => {

    const haircuts = await prisma.hairCuts.findMany()

    console.log(haircuts)


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
