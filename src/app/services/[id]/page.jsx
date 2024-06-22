import { getServiceDetails } from '@/services/getServices';
import React from 'react';

const getDetails = async()=>{

   
}

const ServiceDetails = async({params}) => {
const id = params.id
const data = await getServiceDetails(id)
console.log(data);
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-5'>Details </h1>
            </div>
           <h1>{data?.title}</h1>
        </div>
    );
};

export default ServiceDetails;