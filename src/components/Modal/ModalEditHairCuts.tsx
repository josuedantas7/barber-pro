'use client'
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { api } from '@/lib/api';
import { HairCutProps } from '@/Interfaces/allInterfaces'
import Notification from '../Notifier/Notification';
import { DialogTitle, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ModalEditClient({haircut, children} : { haircut : HairCutProps, children: React.ReactNode}) {
  const [open, setOpen] = React.useState(false);


  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>(0)

  const router = useRouter()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleEditHairCut(){

    const data : HairCutProps = {
        id: haircut.id,
        name: name || haircut?.name,
        price: price || haircut?.price,
    }

    try{
        await api.post('/api/edithaircuts', {...data})
        Notification('success','Modelo de corte editado com sucesso')
        router.replace('/cortes')
        router.refresh()
    }catch{
        Notification('error','Erro ao editar modelo de corte')
    }finally{
        router.replace('/cortes')
        router.refresh()
    }
  }

  function formatPrice(price : number){
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  useEffect(() => {
    if (isNaN(price)) {
        setPrice(0)
    }
  },[price])

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className='bg-[#12131B] text-white text-center font-bold'>{"Editar modelo de corte"}</DialogTitle>
        <DialogContent className='bg-[#12131B]'>
          <div id="alert-dialog-description">
            <div className='flex flex-col w-[500px]'>
                <div className='flex flex-col gap-2 items-center'>
                    <TextField placeholder={haircut.name} onChange={(e) => setName(e.target.value)} type='text' className='bg-[#1B1C29] rounded-md w-[80%]' id="outlined-basic" label="Nome do corte" variant="filled" defaultValue={haircut?.name} />
                    <TextField placeholder={formatPrice(haircut.price)} onChange={(e) => setPrice(Number(e.target.value))} type='number' className='bg-[#1B1C29] rounded-md w-[80%]' id="outlined-basic" label="Preço" variant="filled" defaultValue={haircut?.price} />
                </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className='bg-[#12131B]'>
          <Button className='text-white font-bold' onClick={handleClose}>Cancelar</Button>
          <Button className='text-white font-bold' onClick={() => {
            handleClose(),
            handleEditHairCut()
          }} autoFocus>
            Salvar alteração
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}