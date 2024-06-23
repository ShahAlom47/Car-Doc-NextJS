import connectDB from "@/lib/connectDB"
import { servicesData } from "@/lib/serviceData"
import { NextResponse } from "next/server"

export const GET = async () => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')

    try {
        await servicesCollection.deleteMany()
        const res = await servicesCollection.insertMany(servicesData)
        return NextResponse.json(res)
    }
    catch (error) {
        return NextResponse.json(error)
    }

} 