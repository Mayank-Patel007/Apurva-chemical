import React, { useState } from 'react';
import { IoNewspaperSharp } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import img1 from "../assets/mission1.jpg";
import img2 from "../assets/mission2.jpg";
import img4 from "../assets/value1.jpg";
import img5 from "../assets/value2.jpg";

function Ourprocess() {
    const [activeSection, setActiveSection] = useState('process'); // State to manage active section

    return (
        <div className='p-4 py-10 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] lg:pt-10 xl:pt-16'>
            <div className='flex justify-center space-x-2'>
                <button 
                    onClick={() => setActiveSection('process')} 
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'process' && 'border-b-teal-500 text-gray-800 bg-white shadow-lg'}`}
                >
                    OUR PROCESS
                </button>
                <button 
                    onClick={() => setActiveSection('mission')} 
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'mission' && 'border-b-teal-500 text-gray-800 bg-white shadow-lg'}`}
                >
                    OUR MISSION
                </button>
                <button 
                    onClick={() => setActiveSection('value')} 
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'value' && 'border-b-teal-500 text-gray-800 bg-white shadow-lg'}`}
                >
                    OUR VALUE
                </button>
            </div>

            <div className='flex justify-center py-10 px-3'>
                <p className='text-gray-500 flex flex-col justify-center items-center text-center px-4 lg:px-36 xl:px-80'>Your full service lab for clinical trials. Our process is to ensure the generation of accurate and precise findings</p>
            </div>

            {/* Our Process Section */}
            {activeSection === 'process' && (
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-10'>
                        <div className='px-5 flex flex-col justify-center items-center'>
                            <div className='text-8xl text-teal-500'>
                                <IoNewspaperSharp />
                            </div>
                            <div className='flex flex-col justify-center items-center text-center space-y-5 py-5'>
                                <p className='text-2xl font-bold'>Generate Proposal</p>
                                <p className='text-gray-500 px-10'>Testing Begins many various suffered alter in some</p>
                            </div>
                        </div>

                        <div className='px-5 flex flex-col justify-center items-center'>
                            <div className='text-8xl text-teal-500'>
                                <GrTest />
                            </div>
                            <div className='flex flex-col justify-center items-center text-center space-y-5 py-5'>
                                <p className='text-2xl font-bold'>Testing Begins</p>
                                <p className='text-gray-500 px-10'>There are many various passages suffered alter in some</p>
                            </div>
                        </div>

                        <div className='px-5 flex flex-col justify-center items-center'>
                            <div className='text-8xl text-teal-500'>
                                <TbReport />
                            </div>
                            <div className='flex flex-col justify-center items-center text-center space-y-5 py-5'>
                                <p className='text-2xl font-bold'>Reports Delivered </p>
                                <p className='text-gray-500 px-10'>There are many various passages suffered alter in some</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Our Mission Section */}
            {activeSection === 'mission' && (
                <div>
                    <div className='block md:hidden'>
                        <div className='flex flex-col justify-center items-center text-center space-y-5 py-5'>
                            <p className='text-3xl font-semibold font-daysOne px-2 md:text-4xl md:px-10'>Our Mission is to Give You Always Best Results.</p>
                            <p className='md:px-4'>Adipisicing Lorem cillum ut dolor aute aute in esse minim ea. Nulla est et in ea sint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                            <p className='md:px-4'>Nulla est et in ea sint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                        </div>
                        <div className='space-y-10 md:flex md:space-y-0 '>
                            <div className='flex justify-center md:w-1/2 '><img className='rounded-xl' src={img1} alt="img1" /></div>
                            <div className='flex justify-center md:w-1/2 '><img className='rounded-xl' src={img2} alt="img2" /></div>
                        </div>
                    </div>

                    <div className='hidden md:block md:py-10'>
                        <div className='space-y-10 md:flex md:space-y-0 '>
                            <div className='flex justify-center md:w-1/3 '><img className='rounded-xl' src={img1} alt="img1" /></div>
                            <div className='flex flex-col justify-center items-center text-center space-y-5 py-5 md:w-2/3 md:px-6'>
                                <p className='text-3xl font-semibold font-daysOne px-2 md:text-3xl xl:text-4xl xl:px-10 md:px-5'>Our Mission is to Give You Always Best Results.</p>
                                <p className='md:px-4'>Adipisicing Lorem cillum ut dolor aute aute in esse minim ea. Nulla est et in ea sint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                                <p className='md:px-4'>Nulla est et in ea sint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                            </div>
                            <div className='flex justify-center md:w-1/3 '><img className='rounded-xl' src={img2} alt="img2" /></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Our Value Section */}
            {activeSection === 'value' && (
                <div>
                    <div className='block md:hidden'>
                        <div className='flex flex-col justify-center items-center text-center space-y-5 py-5'>
                            <p className='text-3xl font-semibold font-daysOne px-2 md:text-4xl md:px-10'>We are Trusted by over 25000+ of customers</p>
                            <p className='md:px-4'> Nulla est et in ea sint ex cup Lorem cillum ut dolor aute aute in esse minim ea.Didatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                            <p className='md:px-4'>W est et in ea sint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                        </div>
                        <div className='space-y-10 md:flex md:space-y-0 '>
                            <div className='flex justify-center md:w-1/2 '><img className='rounded-xl' src={img4} alt="img1" /></div>
                            <div className='flex justify-center md:w-1/2 '><img className='rounded-xl' src={img5} alt="img2" /></div>
                        </div>
                    </div>

                    <div className='hidden md:block md:py-10'>
                        <div className='space-y-10 md:flex md:space-y-0 '>
                            <div className='flex justify-center md:w-1/3 '><img className='rounded-xl' src={img4} alt="img1" /></div>
                            <div className='flex flex-col justify-center items-center text-center space-y-5 py-5 md:w-2/3 md:px-6'>
                                <p className='text-3xl font-semibold font-daysOne px-2 md:text-3xl xl:text-4xl xl:px-10 md:px-5'>We are Trusted by over 25000+ of customers</p>
                                <p className='md:px-4'>A Nulla est et in ea sb Lorem cillum ut dolor aute aute in esse minim ea. Fint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                                <p className='md:px-4'>West et in ea sint ex cupidatat ex dolore amet consectetur in. Nisi do sit ullamco aliquip. Ut Lorem culpa excepteur proident.</p>
                            </div>
                            <div className='flex justify-center md:w-1/3 '><img className='rounded-xl' src={img5} alt="img2" /></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Ourprocess;
