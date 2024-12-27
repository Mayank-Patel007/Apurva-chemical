import React from 'react';
import Slider from 'react-slick';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSlide = () => {
    const teamMembers = [
        { name: 'John Doe', position: 'MEDICAL DOCTOR', image: team1 },
        { name: 'Jane Smith', position: 'GENETIC SPECALIST', image: team2 },
        { name: 'Emily Johnson', position: 'MICROBIOLOGY EXPERT', image: team3 },
        { name: 'Mike Davis', position: 'SURGEON', image: team4 }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center">
            <div className='flex flex-col justify-center items-center text-center'>
                <div>
                    <p className='text-blue-600 font-bold py-8'>____ OUR TEAM ____</p>
                </div>
                <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                    <p className='text-4xl font-bold text-gray-800 md:text-5xl font-daysone'>Our Specialist</p>
                </div>
            </div>
            <Slider {...settings}>
                {teamMembers.map((member, index) => (
                    <div key={index} className="p-4">
                        <div className="rounded-lg text-center hover:scale-105 duration-500">
                            <div className=" py-6">
                                <img className="w-auto h-auto mx-auto" src={member.image} alt={member.name} />
                            </div>
                            <div className='py-6 px-4 bg-white '>
                                <h3 className="text-2xl font-medium capitalize">{member.name}</h3>
                                <p className="text-blue-500 font-medium">{member.position}</p>
                                <div className="flex justify-center items-center mt-4 space-x-4 bg-gray-100 py-2">
                                    <FaFacebookF className='hover:text-blue-700 duration-100' />
                                    <hr className='h-5 border border-gray-300' />
                                    <FaTwitter className='hover:text-sky-500 duration-100' />
                                    <hr className='h-5 border border-gray-300' />
                                    <FaLinkedinIn className='hover:text-blue-600 duration-100' />
                                    <hr className='h-5 border border-gray-300' />
                                    <FaYoutube className='hover:text-red-500 duration-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamSlide;
