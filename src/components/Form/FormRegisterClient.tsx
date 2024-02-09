'use client'
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectHairCut from '../SelectHairCuts/SelectHairCuts'
import { api } from '@/lib/api'
import Notification from '../Notifier/Notification'
import { useRouter } from 'next/navigation'

const FormRegisterClient = () => {

    const [name,setName] = useState<string>('')
    const [haircut,setHaircut] = useState<string>('')
    const [allHairCuts,setAllHairCuts] = useState([])

    const router = useRouter()

    async function handleRegisterClient(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data = {
            name,
            idHairCuts: haircut
        }

        try {
            await api.post('/api/clients', {...data})
            Notification('success','Cliente cadastrado com sucesso')
            router.push('/agenda')
        } catch{
            Notification('error','Erro ao cadastrar cliente')
        }
    }

    useEffect(() => {
        async function getHairCuts(){
            const response = await api.get('/api/haircuts', {
                params: {
                    checked: true
                }
            })
            setAllHairCuts(response.data)
        }
        getHairCuts()
    },[])


  return (
    <form className='flex flex-col w-[80%] mx-auto gap-4 p-8 rounded-lg bg-[#202130]' onSubmit={handleRegisterClient}>
        <h1 className='text-white text-2xl font-bold text-center'>Cadastrar serviço</h1>
        <TextField onChange={(e) => setName(e.target.value)} type='text' className='bg-[#1B1C29] rounded-md' id="outlined-basic" label="Nome do corte" variant="filled" />
        <SelectHairCut haircut={haircut} setHairCut={setHaircut} haircuts={allHairCuts} />
        <Button type='submit' className='bg-[#FBA931] py-2 text-black font-bold' variant="outlined">Cadastrar</Button>
    </form>
  )
}

export default FormRegisterClient