import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb"


export const  GET =async(request,{params})=>{
const id = params.id
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try {
        const res = await servicesCollection.findOne({_id: id})
        return Response.json(res)
    }
    catch (error) {

        console.log(error);
        return Response.json(error)
    }
} 