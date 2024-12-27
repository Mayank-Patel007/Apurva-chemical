import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { GrDocumentTest } from "react-icons/gr";
import { LuTestTube2 } from "react-icons/lu";
import { GrTest } from "react-icons/gr";
import { FaBacterium } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiDna2 } from "react-icons/gi";
import { SiMicrogenetics } from "react-icons/si";
import { RiTestTubeLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

function Products() {
    return (
        <div className='bg-gray-100 p-4 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] lg:pt-10 xl:pt-10 py-24'>
            <div>
                <div>
                    <p className='text-blue-600 font-bold'>____ OUR PRODUCTS</p>
                </div>
                <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                    <p className='text-3xl font-bold text-gray-800 md:text-4xl font-daysone'>PRODUCTS/SERVICES AREA</p>
                    <p className='py-3 text-gray-500 font-semibold flex flex-wrap gap-2'>
                        We'll Ensure you always get the best results: <span className='flex items-center gap-2 text-blue-600 font-semibold'> CONTACT US <FaArrowRight /> </span>
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:px-5'>
                {/* Card 1 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-blue-500 hover:duration-700'>
                    <div className='text-4xl bg-blue-100 text-blue-600 group-hover:text-white group-hover:bg-blue-400 p-4 rounded-full'>
                        <GrDocumentTest />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Hemoglobin</p>
                        <div className='text-blue-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-red-500 hover:duration-700'>
                    <div className='text-4xl bg-red-100 text-red-600 group-hover:text-white group-hover:bg-red-400 p-4 rounded-full'>
                        <LuTestTube2 />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Blood Test</p>
                        <div className='text-red-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-teal-500 hover:duration-700'>
                    <div className='text-4xl bg-teal-100 text-teal-600 group-hover:text-white group-hover:bg-teal-400 p-4 rounded-full'>
                        <FaBacterium />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Microbiology</p>
                        <div className='text-teal-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-sky-500 hover:duration-700'>
                    <div className='text-4xl bg-sky-100 text-sky-600 group-hover:text-white group-hover:bg-sky-400 p-4 rounded-full'>
                        <GrTest />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Clinical Test</p>
                        <div className='text-sky-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-green-500 hover:duration-700'>
                    <div className='text-4xl bg-green-100 text-green-600 group-hover:text-white group-hover:bg-green-400 p-4 rounded-full'>
                        <GiHeartOrgan />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Genetics</p>
                        <div className='text-green-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-sky-500 hover:duration-700'>
                    <div className='text-4xl bg-sky-100 text-sky-600 group-hover:text-white group-hover:bg-sky-400 p-4 rounded-full'>
                        <GiDna2 />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Microbiogy</p>
                        <div className='text-sky-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 7 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-blue-500 hover:duration-700'>
                    <div className='text-4xl bg-blue-100 text-blue-600 group-hover:text-white group-hover:bg-blue-400 p-4 rounded-full'>
                        <SiMicrogenetics />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Histopahtolgy</p>
                        <div className='text-blue-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>

                {/* Card 8 */}
                <div className='flex flex-col justify-center items-center space-y-4 py-10 bg-white rounded-lg shadow-md group hover:bg-red-500 hover:duration-700'>
                    <div className='text-4xl bg-red-100 text-red-600 group-hover:text-white group-hover:bg-red-400 p-4 rounded-full'>
                        <RiTestTubeLine />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl font-bold group-hover:text-white'>Clinical Test</p>
                        <div className='text-red-300 group-hover:text-white text-5xl'><BsThreeDots /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
