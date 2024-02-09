import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";

export async function POST(request: NextRequest){
    const session = await getServerSession(authOptions)

    if (!session || !session.user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { name, idHairCuts } = await request.json()

    if (!name || !idHairCuts){
        return NextResponse.json({ message: "Please fill all fields" }, { status: 400 })
    }

    try{
        await prisma.clients.create({
            data: {
                name,
                idHairCuts,
                userId: session?.user?.id
            }
        })
        return NextResponse.json({ message: "Client created" }, { status: 201 })
    } catch{
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}


export async function GET(){
    const session = await getServerSession(authOptions)

    if (!session || !session.user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    try{
        const clients = await prisma.clients.findMany({
            where: {
                userId: session.user.id
            }
        })
    
        return NextResponse.json(clients)
    } catch{
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

export async function  DELETE(request: Request){
    const session = await getServerSession(authOptions)

    if (!session || !session.user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)

    const id = searchParams.get('id')

    if (!id){
        return NextResponse.json({ message: "Id not found" }, { status: 400 })
    }

    try{
        await prisma.clients.delete({
            where: {
                userId: session.user.id,
                id
            }
        })
        return NextResponse.json({ message: "Client deleted" }, { status: 200 })
    } catch{
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }

}