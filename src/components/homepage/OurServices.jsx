import Image from 'next/image';
import React from 'react';
import ServicesCard from '../card/ServicesCard';

const getServicesData = async () => {
    const res = await fetch('http://localhost:3000/api/services/get-all')
const services=res.json()
return services
}


const OurServices = async () => {

    const servicesData =await getServicesData()
  
    return (
        <div className=' max-w-7xl my-10'>
            <div className=' text-center mb-6'>
                <h5 className=' text-p-color'>Services</h5>
                <h1 className=" text-3xl font-bold my-3">Our Services Area</h1>
                <p className=' w-6/12 m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
            </div>

            <div className=' p-5 grid grid-cols-3'>
                {
                    servicesData?.map((data, index) => <ServicesCard key={index} data={data}></ServicesCard>)
                }

            </div>

        </div>
    );
};

export default OurServices;