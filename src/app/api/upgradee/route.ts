import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(){


    const session = await getServerSession(authOptions)

    if (!session || !session.user){
        return redirect('/login')
    }

    try {
        const user = await prisma.user.update({
            where: {
                id: session.user.id
            },
            data: {
                role: session?.user.role === 'premium' ? 'free' : 'premium'
            }
        })

        return NextResponse.json(user, { status: 200})
    }catch{
        return NextResponse.json({ error: "Something went wrong"}, { status: 500 })
    }
}