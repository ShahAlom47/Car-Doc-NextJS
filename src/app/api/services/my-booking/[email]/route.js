import connectDB from "@/lib/connectDB"

export const  GET =async(request,{params})=>{
    const email = params.email
        const db = await connectDB()
        const servicesCollection = db.collection('checkoutData')
        try {
            const res = await servicesCollection.find({email:email}).toArray()
            return await Response.json(res)
        }
        catch (error) {
    
            console.log(error);
            return Response.json(error)
        }
    } 