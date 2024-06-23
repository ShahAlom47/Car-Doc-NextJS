import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const  DELETE=async(request,{params})=>{
    const id = params.id
        const db = await connectDB()
        const checkOutCollection = db.collection('checkoutData')
        try {
            const res = await checkOutCollection.deleteOne({_id: new ObjectId(id)})
            return await Response.json(res)
        }
        catch (error) {
    
            console.log(error);
            return Response.json(error)
        }
    } 

    export const PATCH = async (request, { params }) => {
        const id = params.id;
        
       
        let updatedData;
        try {
            updatedData = await request.json();
        } catch (error) {
            console.error('Invalid JSON in request body:', error);
            return new Response(JSON.stringify({ error: 'Invalid JSON in request body' }), { status: 400 });
        }
    
        const db = await connectDB();
        const checkOutCollection = db.collection('checkoutData');
    console.log(id,updatedData);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                phone: updatedData.phone || '',
                message: updatedData.message || '',
            },
        };
    
        try {
            const res = await checkOutCollection.updateOne({ _id: new ObjectId(id) }, updateDoc, options);
            return new Response(JSON.stringify(res), { status: 200 });
        } catch (error) {
            console.error('Error updating document:', error);
            return new Response(JSON.stringify({ error: 'Error updating document' }), { status: 500 });
        }
    };
    

    // get data 

    export const  GET=async(request,{params})=>{
        const id = params.id
            const db = await connectDB()
            const checkOutCollection = db.collection('checkoutData')
            try {
                const res = await checkOutCollection.findOne({_id: new ObjectId(id)})
                return await Response.json(res)
            }
            catch (error) {
        
                console.log(error);
                return Response.json(error)
            }
        }