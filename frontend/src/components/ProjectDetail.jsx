import React from 'react'
import { FaFacebookF, FaPinterestP, FaTwitter, FaYoutube, FaPlay } from "react-icons/fa";
import testimg from '../assets/projectdetail.jpg'
function ProjectDetail() {
    return (
        <div className='p-4 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] lg:pt-10 xl:pt-10 py-24 space-y-16'>
            <div className='md:flex lg:px-16 lg:gap-10 md:items-center'>
                <div className='space-y-10 md:w-1/2'>
                    <div>
                        <p className='text-2xl font-bold font-daysOne xl:text-3xl'>Project Overview</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-lg font-medium'>Client: <span className='text-gray-500 text-base'>Rasalina De Willam (USA)</span> </p>
                        <p className='text-lg font-medium'>Date: <span className='text-gray-500 text-base'>March 21, 2020</span> </p>
                        <p className='text-lg font-medium'>Category: <span className='text-gray-500 text-base'>Laboratory & Science Research</span> </p>
                    </div>
                    <div className='flex space-x-5'>
                        <div className='text-blue-500 p-3 border rounded-full hover:text-white hover:bg-blue-700'><FaFacebookF /></div>
                        <div className='text-orange-500 p-3 border rounded-full hover:text-white hover:bg-orange-700'><FaPinterestP /></div>
                        <div className='text-sky-500 p-3 border rounded-full hover:text-white hover:bg-sky-700'><FaTwitter /></div>
                        <div className='text-red-500 p-3 border rounded-full hover:text-white hover:bg-red-700'><FaYoutube /></div>
                    </div>
                </div>

                <div className='space-y-10 py-10 md:w-1/2 md:py-0'>
                    <p>When faced with a supply chain disruption, proactive and reactive supply chain risk management can in fact make or break a company’s existence. One of the most famous (or rather infamous) cases is the fire at the Philips microchip plant in Albuquerque, New Mexico, in 2000, which simultaneously affected both Noki and Ericsson. However, both companies took a very different approach toward the incident, and in hindsight,</p>
                    <p>Clearly displayed how to and how not to handle supply chain disruptions. New Mexico, in 2000, which simultaneously affected both Nokia and Ericsson</p>
                </div>
            </div>

            <div>
                <img className='rounded-xl' src={testimg} alt="img" />
            </div>

            <div className='md:flex lg:px-16 lg:gap-10'>
                <div className='md:w-1/2'>
                    <p className='text-2xl font-bold font-daysOne xl:text-3xl'>Challenge & Solution</p>
                </div>
                <div className='md:w-1/2 space-y-10 py-10 md:py-0'>
                    <p>Being a top us private facility for any kind of scientific research, we are proud of the overall amount of work we`ve done so far. Excepteur sint occaecat cupidatat non dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>When faced with a supply chain disruption, proactive and reactive supply chain risk management can in fact make or break a company’s existence. One of the most famous (or rather infamous) cases is the fire at the Philips microchip plant in Albuquerque, New Mexico, in 2000, which simultaneously affected both Nokia and Ericsson. However, both companies took a very different approach toward the incident, and in hindsight.</p>
                    <p>Clearly displayed how to and how not to handle supply chain disruptions. New Mexico, in 2000, which simultaneously affected both Nokia and Ericsson</p>
                </div>
            </div>


            <div className='relative'>
                <div>
                    <img className='rounded-xl' src={testimg} alt="img" />
                </div>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <FaPlay size={64} className='cursor-pointer text-black animate-pulse bg-white hover:bg-teal-400  p-5  rounded-full flex justify-center items-center md:text-xl'
                    />
                </div>
            </div>


            <div className='md:flex lg:px-16 lg:gap-10'>
                <div className='md:w-1/2'>
                    <p className='text-2xl font-bold font-daysOne xl:text-3xl'>Our Process</p>
                </div>
                <div className='md:w-1/2 space-y-10 py-10 md:py-0'>
                    <p>Being a top us private facility for any kind of scientific research, we are proud of the overall amount of work we`ve done so far. Excepteur sint occaecat cupidatat non dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>When faced with a supply chain disruption, proactive and reactive supply chain risk management can in fact make or break a company’s existence. One of the most famous (or rather infamous) cases is the fire at the Philips microchip plant in Albuquerque, New Mexico, in 2000, which simultaneously affected both Nokia and Ericsson. However, both companies took a very different approach toward the incident, and in hindsight.</p>
                    <p>Clearly displayed how to and how not to handle supply chain disruptions. New Mexico, in 2000, which simultaneously affected both Nokia and Ericsson</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetail
