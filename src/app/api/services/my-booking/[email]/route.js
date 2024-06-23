import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const  GET =async(request,{params})=>{
    const email = params.email
        const db = await connectDB()
        const servicesCollection = db.collection('checkoutData')
        try {
            const res = await servicesCollection.find({email:email}).toArray()
            return await NextResponse.json(res)
        }
        catch (error) {
    
            
            return NextResponse.json(error)
        }
    } 