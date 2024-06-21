'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import img1 from '../../../../assets/images/banner/1.jpg';
import img2 from '../../../../assets/images/banner/2.jpg';
import img3 from '../../../../assets/images/banner/3.jpg';
import img4 from '../../../../assets/images/banner/4.jpg';

const Banner = () => {
    const slideData = [
        {
            title: 'Comprehensive Diagnostic Services',
            description: 'State-of-the-art diagnostic tools to accurately identify and fix issues with your vehicle.',
            img: img1
        },
        {
            title: 'Expert Engine Repair and Rebuilds',
            description: 'Our experienced mechanics specialize in engine repairs and complete rebuilds to keep your car running smoothly.',
            img: img2,
        },
        {
            title: 'Efficient Brake System Repairs',
            description: 'Top-notch brake repair services to ensure your vehicle’s safety and performance.',
            img: img3,
        },
        {
            title: 'Advanced Transmission Repairs',
            description: 'Specialized services for repairing and maintaining your vehicle’s transmission for a smoother drive.',
            img: img4
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slideData.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slideData.length) % slideData.length);
    };

    return (
        <div className="carousel w-full relative">
            {slideData.map((slide, index) => (
                <div key={index} id={`slide${index + 1}`} className={`carousel-item relative min-h-[500px] w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
                    <Image
                        src={slide.img}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black opacity-10"></div>
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white px-10 w-8/12 text-neutral-50 mx-9 z-10">
                        <h2 className="text-4xl font-bold">{slide.title}</h2>
                        <p className="mt-2">{slide.description}</p>
                    </div>
                </div>
            ))}
            <div className="absolute flex justify-end gap-3 mr-3  items-center bottom-5 left-0 right-0 mx-auto">
                <button onClick={goToPrevSlide} className="btn btn-circle bg-p-color">❮</button>
                <button onClick={goToNextSlide} className="btn btn-circle bg-p-color">❯</button>
            </div>
        </div>
    );
};

export default Banner;
