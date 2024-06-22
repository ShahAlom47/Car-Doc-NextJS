import { getServiceDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
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

                <div className='flex  gap-4'>
                    <div className='flex-1 grid grid-cols-2 gap-3'>
                        {
                            data.facility.map((f, i) => <div key={i} className=' p-2 border-t-2  border-p-color  rounded-lg '>
                                <h1 className='font-bold'>{f.name}</h1>
                                <p>{f.details}</p>

                            </div>)
                        }
                    </div>
                    <div className='w-4/12 m-3 p-3 border-p-color'>
                        <Image src={data.img} alt='img' width={400} height={100}></Image>
                        <h1 className='text-xl font-semibold '>Price: <span className='text-p-color'>{data?.price}</span></h1>
                        <Link href={`/services/checkout/${data._id}`}><button className='text-neutral-50 hover:text-neutral-950 btn bg-p-color w-full'>Checkout</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;