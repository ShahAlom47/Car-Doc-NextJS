import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"



export const POST = async (request) => {
const data=await request.json()

    const db = await connectDB()
    const checkOutCollection = db.collection('checkoutData')

    try {
        const res = await checkOutCollection.insertOne(data)
        return NextResponse.json(res)
    }
    catch (error) {

       
        return NextResponse.json(error)
    }
}
