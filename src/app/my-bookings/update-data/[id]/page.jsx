'use client'
import { getUpdateBookings } from '@/services/getMyBooking';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const UpdateData = ({ params }) => {
    const id = params.id
    const [data,setData]=useState({})  
    // const router= useRouter() 

    const getData=async()=>{
        const data = await getUpdateBookings(id)
        setData(data)

    }

    useEffect(()=>{
       getData()

    },[])

 
    console.log(data);


    const handleForm = async(e)=> {
        e.preventDefault();
        const form = e.target;
        const phone= form.phone.value
        const message= form.message.value
        

        const updatedData={
            
            phone,
            message,
            


        }
        console.log(updatedData);
        const res = await axios.patch(`http://localhost:3000/api/services/my-booking/delete/${id}`,updatedData)
  
         console.log(res);
         if(res.data.modifiedCount>0){

            alert('update success')
            form.reset()
            getData()
            // router.push('/my-bookings')
         }

    }


    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold'> Update Data</h1>
            </div>

            <div>
                <form onSubmit={handleForm} className=" flex flex-col gap-3 items-center ">

                    <input defaultValue={data.phone} type="number" className='input input-bordered w-6/12 mx-auto' name="phone" placeholder='Your Phone No' />
                    <textarea defaultValue={data.message} name="message" className='input input-bordered h-20 w-6/12 mx-auto' placeholder='Your Message'></textarea>
                    <input type="submit" value="Order Confirm" className='btn w-6/12 m-auto bg-p-color' />


                </form>
            </div>
        </div>
    );
};

export default UpdateData;