'use client'
import { SwitchProps } from '@/Interfaces/allInterfaces';
import { createContext,  useState, ReactNode, useEffect } from 'react'

export const SwitchContext = createContext<SwitchProps>({ checked: true, setChecked: () => {}})

export const SwitchProvider = ({children} : {children: ReactNode}) => {
    const [checked, setChecked] = useState(true);


    useEffect(() => {
        console.log(checked)
    },[checked])

    return (
        <SwitchContext.Provider value={{checked, setChecked}}>
            {children}
        </SwitchContext.Provider>
    )
}