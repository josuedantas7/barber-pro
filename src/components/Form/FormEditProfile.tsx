'use client'
import { api } from '@/lib/api'
import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { BarberProps } from '@/Interfaces/allInterfaces'
import Notification from '../Notifier/Notification'
import { useRouter } from 'next/navigation'

const FormEditProfile = () => {
    
    const [name,setName] = useState<string>('')
    const [address,setAddress] = useState<string>('')
    const [oldUser, setOldUser] = useState<BarberProps | null>()

    const router = useRouter()

    useEffect(() => {
        async function getUser(){
            const response = await api.get('/api/user')
            setOldUser(response.data)
        }
        getUser()
    },[])
 

    async function handleEditUser(){
        const data = {
            id: oldUser?.id,
            name: name || oldUser?.name,
            address: address || oldUser?.address        
        }
        try{
            await api.post('/api/edituser', {...data})
            Notification('success','Usuário editado com sucesso')
            router.replace('/minha_conta')
            router.refresh()
        }catch{
            Notification('error','Erro ao editar usuário')
        }
    }

  return (
    <div className='w-full flex flex-col gap-4 mx-auto'>
        <TextField onChange={(e) => setName(e.target.value)} defaultValue={oldUser?.name} type='text' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Nome da barbearia" variant="filled" />
        <TextField onChange={(e) => setAddress(e.target.value)} defaultValue={oldUser?.address ? oldUser.address : ''} type='text' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Endereço" variant="filled" />
        <div className='cursor-pointer border py-2 px-4 items-center border-green-300 rounded-lg flex justify-between'>
            <h1 className={`${oldUser?.role === 'free' ? 'text-green-300 font-bold' : 'text-[#FBB231]'}`}>
                {oldUser?.role === 'free' ? 'Plano grátis' : 'Plano premium'}
            </h1>
            <Button onClick={() => router.push('/planos')} className='px-3 py-1'>
                Mudar plano
            </Button>
        </div>
        <Button className='bg-[#FBB231]' variant="contained" onClick={() => handleEditUser()}>Salvar</Button>
        <Button variant="contained" onClick={() => signOut()}>Sair da conta</Button>
    </div>
  )
}

export default FormEditProfile
