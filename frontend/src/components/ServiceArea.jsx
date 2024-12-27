import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { GrDocumentTest } from "react-icons/gr";
import { LuTestTube2 } from "react-icons/lu";
import { GrTest } from "react-icons/gr";
import { FaBacterium } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiDna2 } from "react-icons/gi";
import { SiMicrogenetics } from "react-icons/si";
import { RiTestTubeLine } from "react-icons/ri";
import gsap from 'gsap';

function ServiceArea() {
    // Ref to hold all service items
    const serviceItemsRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Check if the component is in the viewport
                if (entries[0].isIntersecting) {
                    gsap.from(serviceItemsRef.current, {
                        opacity: 0,
                        y: 50,
                        stagger: 0.2, // Staggering the animation for wave effect
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                    observer.disconnect(); // Stop observing after animation is triggered
                }
            },
            {
                threshold: 0.1, // Trigger animation when 10% of the component is in view
            }
        );

        // Observe the container ref
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className='p-4 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] lg:pt-10 xl:pt-16'>
            <div className=''>
                <div>
                    <p className='text-blue-600 font-bold'>____ OUR SERVICES</p>
                </div>
                <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                    <p className='text-4xl font-bold text-gray-800 md:text-5xl font-daysone'>Service Area</p>
                    <p className='py-3 text-gray-500 font-semibold flex flex-wrap gap-2'>
                        We'll Ensure you always get the best results: <span className='flex items-center gap-2 text-blue-600 font-semibold'> CONTACT US <FaArrowRight /> </span>
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 py-10'>
                    {[
                        { Icon: GrDocumentTest, color: 'blue', title: 'Hemoglobin Test' },
                        { Icon: LuTestTube2, color: 'red', title: 'Blood Testing' },
                        { Icon: GrTest, color: 'pink', title: 'Biochemistry' },
                        { Icon: FaBacterium, color: 'teal', title: 'Microbiology' },
                        { Icon: GiHeartOrgan, color: 'green', title: 'Histopatology' },
                        { Icon: GiDna2, color: 'pink', title: 'Biochemistry' },
                        { Icon: SiMicrogenetics, color: 'blue', title: 'Genetics' },
                        { Icon: RiTestTubeLine, color: 'red', title: 'Blood Testing' }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className='space-y-4 group'
                            ref={el => serviceItemsRef.current[index] = el}
                        >
                            <div className=''>
                                <service.Icon size={64} className={`bg-${service.color}-100 text-${service.color}-600 group-hover:text-white group-hover:bg-${service.color}-500 p-3 rounded-lg duration-300`} />
                            </div>
                            <div className='space-y-2'>
                                <p className='text-2xl font-bold text-gray-800 xl:py-4'>{service.title}</p>
                                <p className='text-gray-600'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceArea;
