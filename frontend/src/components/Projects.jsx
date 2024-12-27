import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Projects() {
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                }
            },
            {
                breakpoint: 600, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile devices
                }
            }
        ]
    };

    return (
        <div className="bg-gray-100 p-4 md:px-10  2xl:px-[600px] lg:pt-10 xl:pt-16">
            <div className='lg:px-12 xl:px-20'>
                <div>
                    <p className='text-blue-600 font-bold'>____ OUR PROJECTS</p>
                </div>
                <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                    <p className='text-3xl font-bold text-gray-800 md:text-4xl font-daysone'>PROJECTS AREA</p>
                    <p className='py-3 text-gray-500 font-semibold flex flex-wrap gap-2'>
                        We'll Ensure you always get the best results: <span className='flex items-center gap-2 text-blue-600 font-semibold'> CONTACT US <FaArrowRight /> </span>
                    </p>
                </div>
            </div>
            <Slider {...settings} className="space-x-4 px-10">
                {/* First Image with Hover Effect */}
                <div className="relative group px-5">
                    <img
                        src={project1}
                        alt="COVID Analysis"
                        className="w-full h-full object-cover"
                    />
                    <div className="mx-5 absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                        <div className="relative text-white text-start">
                            <div className="flex justify-center mb-2">
                                <div className="bg-teal-500 rounded-full p-2 px-4 flex items-center justify-center text-center">
                                    <Link to="/projectdetail" className="text-white text-2xl font-bold">+</Link>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg">COVID ANALYSIS</h2>
                                <p className="text-sm">Radiologist</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Image with Hover Effect */}
                <div className="relative group px-5">
                    <img
                        src={project2}
                        alt="Scientist at work"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute mx-5 inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                        <div className="text-white text-start">
                            <div className="flex justify-center mb-2">
                                <div className="bg-teal-500 rounded-full p-2 px-4 flex items-center justify-center text-center">
                                    <Link to="/projectdetail" className="text-white text-2xl font-bold">+</Link>
                                </div>
                            </div>
                            <h2 className="font-bold text-lg">SCIENTIST AT WORK</h2>
                            <p className="text-sm">Researcher</p>
                        </div>
                    </div>
                </div>

                {/* Third Image with Hover Effect */}
                <div className="relative group px-5">
                    <img
                        src={project3}
                        alt="Lab Research"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute mx-5 inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                        <div className="text-white text-start">
                            <div className="flex justify-center mb-2">
                                <div className="bg-teal-500 rounded-full p-2 px-4 flex items-center justify-center text-center">
                                    <Link to="/projectdetail" className="text-white text-2xl font-bold">+</Link>
                                </div>
                            </div>
                            <h2 className="font-bold text-lg">LAB RESEARCH</h2>
                            <p className="text-sm">Lab Technician</p>
                        </div>
                    </div>
                </div>

                {/* Additional slides */}
                <div className="relative group px-5">
                    <img
                        src={project1}
                        alt="Chemical Analysis"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute mx-5 inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                        <div className="text-white text-start">
                            <div className="flex justify-center mb-2">
                                <div className="bg-teal-500 rounded-full p-2 px-4 flex items-center justify-center text-center">
                                    <Link to="/projectdetail" className="text-white text-2xl font-bold">+</Link>
                                </div>
                            </div>
                            <h2 className="font-bold text-lg">CHEMICAL ANALYSIS</h2>
                            <p className="text-sm">Chemist</p>
                        </div>
                    </div>
                </div>
            </Slider>

            <div className='flex justify-center mt-10'>
                <Link to="/projectdetail" className='bg-teal-500 p-5 px-10 text-white text-lg font-semibold rounded hover:bg-teal-400'>EXPLORE MORE</Link>
            </div>
        </div>
    );
}

export default Projects;
