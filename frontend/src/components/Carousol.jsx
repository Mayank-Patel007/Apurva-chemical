import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import gsap from 'gsap';
import slider1 from '../assets/slider-bg-1.png';
import slider2 from '../assets/slider-bg-3.png';
import slidersmallimg from '../assets/slider-bgsmall.png';

function Carousol() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRefs = useRef([]);
    const textRefs = useRef([]);
    const imgRefs = useRef([]);
    const smallImgRefs = useRef([]);  // Reference for small images
    const buttonRefs = useRef([]);  // Reference for buttons

    const slides = [
        {
            img: slider1,
            title: "Our Passion is to Give you Better Service",
            description: "Your Full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings",
        },
        {
            img: slider2,
            title: "Providing Excellent Service in Every Aspect",
            description: "We aim to deliver accurate and reliable data through our comprehensive clinical trials services.",
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    useEffect(() => {
        // Animate text from below
        gsap.fromTo(
            textRefs.current[currentSlide],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        // Animate main image from the right
        gsap.fromTo(
            imgRefs.current[currentSlide],
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 5, ease: 'power3.out' }
        );
        // Animate small image from the right
        gsap.fromTo(
            smallImgRefs.current[currentSlide],
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 4, ease: 'power3.out' }
        );
        // Animate buttons from below
        gsap.fromTo(
            buttonRefs.current[currentSlide],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, ease: 'power3.out', stagger: 0.2 }
        );
    }, [currentSlide]);

    return (
        <div className='p-4 md:px-10 xl:px-20 2xl:px-[600px] relative'>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`py-10 lg:flex lg:flex-row-reverse lg:gap-10 ease-in-out ${index === currentSlide ? 'opacity-100 transform scale-100 z-10' : 'opacity-0 transform scale-95 z-0 absolute'}`}
                    ref={el => slideRefs.current[index] = el}
                >
                    <div className='lg:w-1/2'>
                        <div className='md:flex md:items-center md:gap-10 lg:relative'>
                            <img
                                ref={el => imgRefs.current[index] = el}
                                className='md:w-1/2 lg:h-[500px] lg:w-[450px] lg:mt-16 xl:h-[600px] xl:w-[500px]'
                                src={slide.img}
                                alt={`slide-${index}`}
                            />
                            <div className='hidden md:block md:w-1/2 lg:absolute lg:-right-5 lg:top-10 xl:top-56 xl:left-[360px]'>
                                <img
                                    ref={el => smallImgRefs.current[index] = el}  // Reference for animation
                                    src={slidersmallimg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 xl:flex xl:flex-col xl:justify-center'>
                        <div className='space-y-4 py-5 pt-10 lg:pl-10' ref={el => textRefs.current[index] = el}>
                            <p className='text-4xl font-bold md:text-5xl xl:text-6xl xl:pr-20 xl:w-5/6'>{slide.title}</p>
                            <p className='text-lg font-semibold md:text-2xl lg:py-7 xl:w-5/6'>{slide.description}</p>
                        </div>
                        <div className='flex flex-col py-4 lg:pl-10 space-y-4 md:flex-row md:space-y-0 md:gap-6' ref={el => buttonRefs.current[index] = el}>
                            <div>
                                <button className='bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium p-4 rounded lg:px-7'>APPOINTMENT</button>
                            </div>
                            <div>
                                <button className='bg-teal-500 hover:bg-teal-400 text-white text-lg font-medium p-4 rounded lg:px-7'>ABOUT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className='md:flex gap-16 py-3 hidden'>
                <div className='flex items-center gap-3 text-lg text-gray-400 hover:text-blue-600 duration-500 cursor-pointer'><FaFacebookF /> <p>FACEBOOK</p></div>
                <div className='flex items-center gap-3 text-lg text-gray-400 hover:text-red-500 duration-500 cursor-pointer'><FaYoutube /> <p>YOUTUBE</p></div>
                <div className='flex items-center gap-3 text-lg text-gray-400 hover:text-sky-500 duration-500 cursor-pointer'><FaTwitter /> <p>TWITTER</p></div>
            </div>
        </div>
    );
}

export default Carousol;
