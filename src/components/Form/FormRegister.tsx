'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { User } from '@/Interfaces/allInterfaces';
import { api } from '@/lib/api';
import Notification from '../Notifier/Notification';
import { useRouter } from 'next/navigation';

const FormRegister = () => {


    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const router = useRouter()

    async function handleRegister(e : FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data : User = {
            name,
            email,
            password
        }
        try{
            await api.post('/api/user', {...data})
            Notification('success', 'Cadastrado com sucesso')
            router.push('/login')
        } catch{
            Notification('error', 'Erro ao cadastrar')
            clearLabels()
        }
        
    }

    function clearLabels(){
        setName('')
        setEmail('')
        setPassword('')
    
    }

  return (
    <form onSubmit={(e) => handleRegister(e)} className='flex flex-col w-[500px] gap-3'>
        <TextField onChange={(e) => setName(e.target.value)} type='text' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Nome da barbearia" variant="filled" />   
        <TextField onChange={(e) => setEmail(e.target.value)} type='email' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Digite seu email" variant="filled" />   
        <TextField onChange={(e) => setPassword(e.target.value)} type='password' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Digite sua senha" variant="filled" /> 
        <Button type='submit' className='bg-[#FBA931] py-2 text-black font-bold' variant="outlined">Cadastrar</Button>
        <p className='text-white text-center'>Já tenho conta. <Link href={'/login'} className='text-gray-500'>Faça login</Link></p>
    </form>
  )
}

export default FormRegister
