import connectDB from "@/lib/connectDB"
import { servicesData } from "@/lib/serviceData"

export const GET = async () => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')

    try {
        await servicesCollection.deleteMany()
        const res = await servicesCollection.insertMany(servicesData)
        return Response.json(res)
    }
    catch (error) {

        console.log(error);
        return Response.json(error)
    }

} 