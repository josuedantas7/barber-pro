import bcrypt from 'bcrypt';
import prisma from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest){

    const { name, email, password } = await request.json()


    if (!name || !email || !password){
        return NextResponse.json({ message: "Please fill all fields" }, { status: 400 })
    }

    const isUserExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(isUserExists){
        return NextResponse.json({ error: "Email already exists."}, { status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
            }
        })
        return NextResponse.json({message: "User created"}, { status: 201 })
    }catch{
        return NextResponse.json({ error: "Something went wrong"}, { status: 500 })
    }

}

export async function GET(){
    return NextResponse.json({ message: "Hello from user route" })
}