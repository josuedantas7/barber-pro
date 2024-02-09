import Header from '@/components/Header/Header'
import TableListClients from '@/components/Table/TableListClients'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

const Agenda = async () => {

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return redirect('/login') 
    }

    const clients = await prisma.clients.findMany({
        include: {
            HairCuts: true
        }
    })

    console.log(clients)

  return (
    <div className='h-screen bg-[#12131B]'>
        <Header/>
        <div className='p-8'>
            <div className='flex gap-4 items-center'>
                <h1 className='text-2xl font-bold text-white'>Agenda</h1>
                <button className='bg-[#212331] py-2 px-3 rounded-md text-white'><Link href={'/agenda/new'}>Registrar</Link></button>
            </div>
            <div>
                <TableListClients clients={clients}/>
            </div>
        </div>
    </div>
  )
}

export default Agenda
