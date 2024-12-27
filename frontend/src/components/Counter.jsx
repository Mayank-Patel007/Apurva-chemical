import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoDiamond } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";
const Counter = () => {
    const [startCounting, setStartCounting] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setStartCounting(true);
        }
    }, [inView]);

    const heading = {
        title: 'OUR COMPANY FACTS',
        subTitle: 'We are proud of our achievements and expertise'
    };

    const facts = {
        yearsOfExperience: 1492,
        teamMembers: 152,
        objectsProtected: 245,
        corporateOffices: 3406
    };

    return (
        <div className="relative bg-gray-800 text-white py-20 bg-cover bg-center bg-fixed bg-[url('C:\react\Apurva-chemical\frontend\src\assets\about.webp')]" ref={ref}>
            <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
                <div className="text-start space-y-4 lg:w-1/3">
                    <div>
                        <p className='text-blue-600 font-bold '>____ {heading.title}</p>
                    </div>
                    <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                        <p className='text-4xl font-bold text-white md:text-4xl font-daysone'>{heading.subTitle}</p>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:w-2/3 font-montserrat">
                    <div className="p-6 relative overflow-hidden bg-white rounded shadow-lg text-center lg:py-10 lg:space-y-2">
                        <div className='absolute -left-3 -top-3'>
                            <GiTestTubes size={64} className='pt-4 pl-4 rounded-full p-2 bg-teal-500 text-white' />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            {startCounting && <CountUp end={facts.yearsOfExperience} duration={2} />}
                        </h3>
                        <p className="text-gray-400 text-xl font-medium">Laboratories in 100+ states</p>
                    </div>
                    <div className="p-6 relative overflow-hidden bg-white rounded shadow-lg text-center lg:py-10 lg:space-y-2">
                        <div className='absolute -left-3 -top-3'>
                            <FaUserDoctor size={64} className='pt-4 pl-4 rounded-full p-2 bg-teal-500 text-white' />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            {startCounting && <CountUp end={facts.teamMembers} duration={2} />}
                        </h3>
                        <p className="text-gray-400 text-xl font-medium">Laboratory specialists</p>
                    </div>
                    <div className="p-6 relative overflow-hidden bg-white rounded shadow-lg text-center lg:py-10 lg:space-y-2">
                        <div className='absolute -left-3 -top-3'>
                            <IoDiamond size={64} className='pt-4 pl-4 rounded-full p-2 bg-teal-500 text-white' />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            {startCounting && <CountUp end={facts.objectsProtected} duration={2} />}
                        </h3>
                        <p className="text-gray-400 text-xl font-medium">Material collection points</p>
                    </div>
                    <div className="p-6 relative overflow-hidden bg-white rounded shadow-lg text-center lg:py-10 lg:space-y-2">
                        <div className='absolute -left-3 -top-3'>
                            <HiMiniUserGroup size={64} className='pt-4 pl-4 rounded-full p-2 bg-teal-500 text-white' />
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            {startCounting && <CountUp end={facts.corporateOffices} duration={2} />}
                        </h3>
                        <p className="text-gray-400 text-xl font-medium">Patients diagnosed in 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
