import React from 'react'
import { GoPersonFill } from "react-icons/go";
import { ClientProps } from '@/Interfaces/allInterfaces'
import ModalDeleteClient from '../Modal/ModalDeleteClient';

const TableListClients = ({clients} : { clients : ClientProps[]}) => {


    function formatPrice(price : number){
        return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

  return (
    <div className='flex flex-col gap-2 mt-8'>
      {clients.map((client) => {
        return (
          <ModalDeleteClient client={client} key={client.id}>
              <div className='w-full flex justify-between py-3 rounded-md px-4 text-white font-bold bg-[#222433]' key={client.id}>
                <div className='flex items-center gap-4 w-1/3'>
                    <GoPersonFill className='text-[#FBB231] text-2xl'/>
                    <p>{client.name}</p>
                </div>
                <div className='w-1/3 flex justify-center'>
                    {client.HairCuts.name}
                </div>
                <div className='w-1/3 flex justify-end'>
                    {formatPrice(client.HairCuts.price)}
                </div>
            </div>
          </ModalDeleteClient>
        )
      })}
    </div>
  )
}

export default TableListClients
