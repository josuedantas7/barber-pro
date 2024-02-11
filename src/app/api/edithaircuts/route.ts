import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id, name, price } = await request.json()

    if(!name || !price){
        return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    try {
        const haircut = await prisma.hairCuts.update({
            where: {
                id: id
            }, 
            data: {
                name: name,
                price: price
            }
        })

        return NextResponse.json(haircut)
    }catch{
        return NextResponse.json({ error: "Error updating haircut" }, { status: 500 })
    }

}