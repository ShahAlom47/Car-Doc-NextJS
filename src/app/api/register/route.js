import connectDB from "../../../lib/connectDB";
const bcrypt = require('bcrypt');



export const POST = async(request)=>{
    const newUser= await request.json()

    try{
        const db= await connectDB()
        const userCollection = db.collection('users')
        const existingUser= await userCollection.findOne({email:newUser.email})
        console.log(existingUser);
        if(existingUser){
            return Response.json({message:'user exist',status:304})
        }
        const hashPass = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({...newUser,password:hashPass});
        return Response.json(res)

    }
    catch(error){
        console.log(error);
    }


}