'use client'
import React, { FormEvent, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { User } from '@/Interfaces/allInterfaces';
import { signIn } from 'next-auth/react';
import Notification from '../Notifier/Notification';
import { useRouter } from 'next/navigation';

const FormLogin = () => {


    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const router = useRouter()

    async function handleLogin(e : FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data : User = {
            email,
            password
        }
        try {
            await signIn('credentials', {...data, redirect: false})
            console.log('a')
            router.push('/')
            Notification('success', 'Logado com sucesso')
        } catch(err){
            Notification('error', 'Erro ao logar')
        }
    }

  return (
    <form onSubmit={(e) => handleLogin(e)} className='flex flex-col w-[500px] gap-3'>
        <TextField onChange={(e) => setEmail(e.target.value)} type='email' className='bg-[#1B1C29] rounded-md' id='email' label="Digite seu email" variant="filled" /> 
        <TextField onChange={(e) => setPassword(e.target.value)} type='password' className='bg-[#1B1C29] rounded-md' id='password' label="Digite sua senha" variant="filled" />
        <Button type='submit' className='bg-[#FBA931] py-2 text-black font-bold' variant="outlined">Acessar</Button>
        <p className='text-white text-center'>Quero cadastrar minha barbearia <Link href={'/cadastro'} className='text-gray-500'>Clique aqui</Link></p>
    </form>
  )
}

export default FormLogin
