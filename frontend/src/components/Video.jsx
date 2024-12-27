import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import videoimg from '../assets/videobg.png';
import videosmallimg from '../assets/videosmallbg.png';

// YouTube video URL
const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your actual video URL

function Video() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='p-4 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] bg-gray-100'>
            <div className='xl:flex xl:gap-10'>
                <div className='flex justify-center items-center xl:w-1/2'>
                    <div className='relative'>
                        <img src={videoimg} alt="img" className='md:w-auto md:h-auto md:max-w-full' />
                        <div className='absolute bottom-10 md:inset-0 md:flex md:justify-center md:items-center'>
                            <div
                                onClick={openModal}
                                className='cursor-pointer text-white animate-pulse bg-teal-500 hover:bg-teal-400 p-5 xl:p-10 rounded-full flex justify-center items-center md:text-xl'
                            >
                                <FaPlay size={24} />
                            </div>
                        </div>
                        <div className='hidden md:block absolute bottom-0 -left-28'>
                            <img src={videosmallimg} alt="" />
                        </div>
                    </div>
                </div>

                <div className='py-5 space-y-10 xl:w-1/2'>
                    <div>
                        <p className='text-blue-600 font-bold'>____ ABOUT US</p>
                    </div>
                    <div className='space-y-5'>
                        <p className='text-4xl font-bold px-2 text-gray-800 md:px-0 md:text-5xl'>Best Laboratory For Testing And Research</p>
                        <p className='text-lg font-semibold px-2 py-3'>Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings</p>
                        <p className='px-2'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo habent claritatem insitamconse quat.</p>
                    </div>
                    <div className='px-2'>
                        <button className='bg-blue-600 hover:bg-blue-500 text-white font-semibold p-4 px-7 rounded '>TALK WITH EXPERT</button>
                    </div>
                </div>
            </div>

            {/* Modal for Video */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-0 right-0 p-2 text-black"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                        <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="YouTube video"
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Video;
