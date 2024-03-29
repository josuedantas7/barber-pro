import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: NextRequest){

    const session = await getServerSession(authOptions)

    if (!session || !session.user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { name, price } = await request.json()


    if (!name || !price){
        return NextResponse.json({ message: "Please fill all fields" }, { status: 400 })
    }

    try{
        await prisma.hairCuts.create({
            data: {
                name,
                price: parseFloat(price),
                userId: session?.user?.id
            }
        })
        return NextResponse.json({ message: "Haircut created" }, { status: 201 })
    } catch{
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}

export async function GET(request: NextRequest){
    const session = await getServerSession(authOptions)

    if (!session || !session.user){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)

    const checked = searchParams.get('checked')

    if (checked){
        try{
            const hairCuts = await prisma.hairCuts.findMany({
                where: {
                    active: true,
                    userId: session.user.id
                }
            })
        
            return NextResponse.json(hairCuts)
        } catch{
            return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
        }
    } else {
        try{
            const hairCuts = await prisma.hairCuts.findMany({
                where: {
                    active: false,
                    userId: session.user.id
                }
            })
        
            return NextResponse.json(hairCuts)
        } catch{
            return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
        }
    }
}