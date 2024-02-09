'use client'
import { HairCutProps } from '@/Interfaces/allInterfaces'
import { api } from '@/lib/api'
import { Button, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Notification from '../Notifier/Notification'

const FormRegisterHairCuts = () => {


    const [name,setName] = useState<string>('')
    const [price,setPrice] = useState<number>(0)

    async function handleRegisterHairCut(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data : HairCutProps = {
            name,
            price
        }
        try{
            await api.post('/api/haircuts', {...data})
            Notification('success','Corte cadastrado com sucesso')
        }catch{
            Notification('error','Erro ao cadastrar corte')
        }
    }

    useEffect(() => {
        if (isNaN(price)){
            setPrice(0)
        }
    },[price])

  return (
    <form className='flex flex-col w-[80%] mx-auto gap-4 p-8 rounded-lg mt-8 bg-[#202130]' onSubmit={handleRegisterHairCut}>
        <h1 className='text-white text-2xl font-bold text-center'>Cadastrar modelo</h1>
        <TextField onChange={(e) => setName(e.target.value)} type='text' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Nome do corte" variant="filled" />   
        <TextField onChange={(e) => setPrice(parseFloat(e.target.value))} type='number' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Preço exemplo: 45.90" variant="filled" />   
        <Button type='submit' className='bg-[#FBA931] py-2 text-black font-bold' variant="outlined">Cadastrar</Button>
    </form>
  )
}

export default FormRegisterHairCuts
