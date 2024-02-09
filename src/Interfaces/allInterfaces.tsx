export interface User{
    name?: string,
    email: string,
    password: string,
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