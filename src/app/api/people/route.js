import { connectDB } from "@/libs/mongodb";
import User from '@/models/user'
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB()
    const people = await User.find()
    return NextResponse.json(people)
}

export async function POST(request){
    try{
        await connectDB()

        const { name, lastname, age } = await request.json()

        if (name == null){
            return NextResponse.json({ message: "Please send a name"  }, {status: 400})
        }

        const person = await User.create({ name, lastname, age: Number(age) })

        return NextResponse.json(person, {status: 201})
    } catch {
        return NextResponse.json({message: "Bad Request"}, {status: 400})
    } 
}