'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { HairCutProps } from '@/Interfaces/allInterfaces';

interface SelectHairCutProps{
    haircuts: HairCutProps[],
    haircut: string,
    setHairCut: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectHairCut({haircuts, haircut, setHairCut} : SelectHairCutProps) {

  const handleChange = (event: SelectChangeEvent) => {
    setHairCut(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Modelo de corte</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={haircut}
          label="Modelo de corte"
          onChange={handleChange}
        >
          {haircuts.map((haircut) => {
            return <MenuItem key={haircut.id} value={haircut.id}>{haircut.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
