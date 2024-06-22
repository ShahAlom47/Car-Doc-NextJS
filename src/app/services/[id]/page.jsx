import { getServiceDetails } from '@/services/getServices';
import Image from 'next/image';
import React from 'react';

const getDetails = async () => {


}

const ServiceDetails = async ({ params }) => {
    const id = params.id
    const data = await getServiceDetails(id)
    console.log(data);
    return (
        <div className='max-w-7xl m-auto'>
            <div>
                <h1 className='text-3xl font-bold m-5'>Details </h1>
            </div>
            <div className='p-8  my-6'>
                <Image src={data.img} alt='img' width={700} height={500}></Image>
                <div className='bg-neutral-400 p-3'>

                    <h1 className='text-xl text-p-color font-bold'>{data?.title}</h1>
                    <p>{data.description}</p>
                </div>

                <div>
                    <div className=' grid grid-cols-2 gap-3'>
                        {
                            data.facility.map((f,i)=><div key={i} className=' p-2 border-t-2  border-p-color  rounded-lg '>
                                <h1 className='font-bold'>{f.name}</h1>
                                <p>{f.description}</p>

                            </div>)
                        }
                    </div>
                </div>
            </div>
            <h1 className='text-xl text-p-color'>Price:{data?.price}</h1>
        </div>
    );
};

export default ServiceDetails;