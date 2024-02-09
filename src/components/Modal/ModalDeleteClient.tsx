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

export default function AlertDialog({client} : { client : ClientProps}) {
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

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='flex flex-col'>
                <div className='flex gap-2 items-center'>
                    <GoPersonFill className='text-[#FBB231] text-2xl'/>
                    <p className='text-white text-bold'>{client.name}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <IoCut className='text-[#FBB231] text-2xl'/>
                    <p className='text-white text-semibold'>{client.HairCuts.name}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <TbBrandCashapp className='text-[#FBB231] text-2xl'/>
                    <p className='text-white text-semibold'>{client.HairCuts.price}</p>
                </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => {
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