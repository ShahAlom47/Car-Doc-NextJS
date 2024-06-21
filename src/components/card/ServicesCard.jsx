import Image from 'next/image';
import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';

const ServicesCard = ({data}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <Image src={data.img} height={700} width={500} alt="Shoes" className="rounded-xl" ></Image>
         
        </figure>
        <div className="card-body  text-center">
            <h2 className="card-title">{data.title}</h2>
            <div className=" flex justify-between items-center text-start">
                <p className="font-semibold text-p-color">Price: $ {data.price}</p>
                <button className="btn"><BiArrowToRight></BiArrowToRight></button>
            </div>
        </div>
    </div>
    );
};

export default ServicesCard;