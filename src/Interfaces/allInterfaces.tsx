export interface User{
    name?: string,
    email: string,
    password?: string,
    address?: string,
    id?: string,
}

export interface HairCutProps{
    id?: string,
    name: string,
    price: number
}

export interface ClientProps{
    id?: string,
    name: string,
    idHairCuts: string,
    HairCuts: HairCutProps
}

export interface SwitchProps{
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export interface BarberProps{
    id: string,
    name: string,
    email: string,
    role: string,
}