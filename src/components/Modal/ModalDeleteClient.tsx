'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { api } from '@/lib/api';
import { ClientProps } from '@/Interfaces/allInterfaces'
import Notification from '../Notifier/Notification';
import { GoPersonFill } from "react-icons/go";
import { IoCut } from "react-icons/io5";
import { TbBrandCashapp } from "react-icons/tb";

export default function ModalDeleteClient({client, children} : { client : ClientProps, children: React.ReactNode}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleDeleteUser(){
    try{
        await api.delete('/api/clients', {
            params: {
                id: client.id
            }
        })
        Notification('success','Cliente deletado com sucesso')
    } catch{
        Notification('error','Erro ao deletar cliente')
    }
  }

  function formatPrice(price : number){
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

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
        <DialogContent className='bg-[#12131B]'>
          <div id="alert-dialog-description">
            <div className='flex flex-col'>
                <div className='flex gap-2 items-center'>
                    <GoPersonFill className='text-[#FBB231] text-2xl'/>
                    <span className='text-white text-bold'>{client.name}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <IoCut className='text-[#FBB231] text-2xl'/>
                    <span className='text-white text-semibold'>{client.HairCuts.name}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <TbBrandCashapp className='text-[#FBB231] text-2xl'/>
                    <span className='text-white text-semibold'>{formatPrice(client.HairCuts.price)}</span>
                </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className='bg-[#12131B]'>
          <Button className='text-white font-bold' onClick={handleClose}>Cancelar</Button>
          <Button className='text-white font-bold' onClick={() => {
            handleClose(),
            handleDeleteUser()
          }} autoFocus>
            Finalizar serviço
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}