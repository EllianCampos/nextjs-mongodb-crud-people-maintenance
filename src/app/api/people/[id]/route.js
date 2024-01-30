import { connectDB } from "@/libs/mongodb";
import User from '@/models/user'
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connectDB()

    if (params.id == null) {
        return NextResponse.json({ message: "Bad Request" }, { status: 400 })
    }

    const user = await User.findById({ _id: params.id })

    if (user == null) {
        return NextResponse.json({ message: 'No Content' }, { status: 400 })
    }

    return NextResponse.json(user)
}

export async function PUT(request, { params }) {
    await connectDB()

    if (params.id == null) {
        return NextResponse.json({ message: "Bad Request" }, { status: 400 })
    }

    const { name, lastname, age } = await request.json()

    if (name == null) {
        return NextResponse.json({ message: "Please send a name" }, { status: 400 })
    }

    // Find person
    const user = await User.findById(params.id)

    // Stop if person doesn't exit
    if (user == null) {
        return NextResponse.json({ message: 'No Content' }, { status: 400 })
    }

    // Update person
    const userUpdated = await User.findByIdAndUpdate({ _id: params.id }, { name, lastname, age }, { new: true })

    return NextResponse.json(userUpdated)
}

export async function DELETE(request, { params }) {
    await connectDB()

    if (params.id == null) {
        return NextResponse.json({ message: "Bad Request" }, { status: 400 })
    }

    const result = await User.findByIdAndDelete(params.id)

    if (result) {
        return NextResponse.json({ message: 'Deleted' }, { status: 200 })
    } else {
        return NextResponse.json({ message: 'No Content' }, { status: 400 })
    }
}