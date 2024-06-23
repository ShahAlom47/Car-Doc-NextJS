'use client'
import { getMyBookings } from '@/services/getMyBooking';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MyBookings = () => {
    const { data: session } = useSession();
    const [data, setData] = useState([]);

    const getData = async () => {
        if (session?.user?.email) {
            const bookingData = await getMyBookings(session.user.email);
            setData(bookingData);
        }
    }

    useEffect(() => {
        getData();
    }, [session]);

const handleDelete =async(id)=>{
    const res = await axios.delete(`http://localhost:3000/api/services/my-booking/delete/${id}`)
    console.log(res);
    if(res.data.deletedCount>0){
        alert('deleted success')
        getData();
    }


}
    
    // console.log(data);

    return (
        <div className=''>
            <div>
                <h1 className='text-3xl font-bold my-7'>My Bookings</h1>
            </div>
            <div className='my-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((b, i) => (
                                    <tr key={i}>
                                        <th>{b.serviceId.title}</th>
                                        <th>{b.price}</th>
                                        <th>{b.date}</th>
                                        <th>{b.phone}</th>
                                        <th>
                                           <Link href={`/my-bookings/update-data/${b._id}`}> <button  className='btn btn-sm'>Edit</button></Link>
                                            <button onClick={()=>handleDelete(b._id)} className='btn btn-sm'>Delete</button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
