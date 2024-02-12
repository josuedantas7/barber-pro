import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"

export async function POST(request: Request){

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return redirect('/login')
    }

    const { name, address, id } = await request.json()

    try{
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name,
                address
            }
        })
        return new Response('Usuário editado com sucesso', {status: 200})
    }catch{
        return new Response('Erro ao editar usuário', {status: 400})
    }

}