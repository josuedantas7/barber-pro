'use client'
import { SwitchContext } from '@/context/SwitchContext';
import { Switch } from '@mui/material';
import React, { useContext } from 'react'

const SwitchComponent = () => {

    const { checked, setChecked } = useContext(SwitchContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='flex gap-4 items-center'>
            <h1>{checked ? 'Ativos' : 'Desativados'}</h1>
            <Switch onChange={handleChange} defaultChecked />
        </div>
    )
}

export default SwitchComponent
