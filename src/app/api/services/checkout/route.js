import connectDB from "@/lib/connectDB"



export const POST = async (request) => {
const data=await request.json()

    const db = await connectDB()
    const checkOutCollection = db.collection('checkoutData')

    try {
        const res = await checkOutCollection.insertOne(data)
        return Response.json(res)
    }
    catch (error) {

        console.log(error);
        return Response.json(error)
    }
}