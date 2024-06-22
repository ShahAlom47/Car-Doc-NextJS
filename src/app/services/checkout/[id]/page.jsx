'use client'
import { getServiceDetails } from '@/services/getServices';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CheckOut =  ({params}) => {
const router=useRouter();
const id = params.id
const [data,setData]=useState({})
const {data:user}=useSession()

const getData=async()=>{
    const data = await getServiceDetails(id)
    setData(data)
}


useEffect(()=>{
    getData()
},[params])

    const handleForm = async(e)=> {
        e.preventDefault();
        const form = e.target;
        const name= form.name.value
        const email= form.email.value
        const phone= form.phone.value
        const message= form.message.value

        const checkOutData={
            name,
            email,
            phone,
            message,
            date: new Date().toLocaleString(),
            price:data.price,
            serviceId:{...data}


        }
        console.log(checkOutData);
        const res = await axios.post('http://localhost:3000/api/services/checkout',checkOutData)
        // const res= await fetch('http://localhost:3000/api/services/checkout')
         console.log(res);
         if(res.data.insertedId){

            alert('booking confirm')
            form.reset()
            router.push('/')
         }

    }

    return (
        <div className=' max-w-7xl'>
            <div>
                <h1 className=' text-3xl font-bold my-5'>Check Out </h1>
            </div>

            <div className=' p-10 border-2 my-3 bg-neutral-500 '>
                <form  onSubmit={handleForm} className=" flex flex-col gap-3 items-center ">

                    <input type="text" defaultValue={user?.user.name} className='input input-bordered  w-6/12 mx-auto' name="name" placeholder='Your Name' />
                    <input type="email" defaultValue={user?.user.email} className='input input-bordered w-6/12 mx-auto' name="email" placeholder='Your Email' />
                    <input type="number" className='input input-bordered w-6/12 mx-auto' name="phone" placeholder='Your Phone No' />
                    <textarea name="message" className='input input-bordered h-20 w-6/12 mx-auto' placeholder='Your Message'></textarea>
                    <input type="submit" value="Order Confirm" className='btn w-6/12 m-auto bg-p-color' />


                </form>



            </div>
        </div>
    );
};

export default CheckOut;