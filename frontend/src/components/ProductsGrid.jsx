import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import { GrDocumentTest } from "react-icons/gr";
import { LuTestTube2 } from "react-icons/lu";
import { GrTest } from "react-icons/gr";
import { FaBacterium } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import { GiDna2 } from "react-icons/gi";
import { SiMicrogenetics } from "react-icons/si";
import { RiTestTubeLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const colorMap = {
    GrDocumentTest: {
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600',
        hoverBgColor: 'group-hover:bg-blue-500',
        hoverTextColor: 'group-hover:text-white',
    },
    LuTestTube2: {
        bgColor: 'bg-red-100',
        textColor: 'text-red-600',
        hoverBgColor: 'group-hover:bg-red-500',
        hoverTextColor: 'group-hover:text-white',
    },
    GrTest: {
        bgColor: 'bg-teal-100',
        textColor: 'text-teal-600',
        hoverBgColor: 'group-hover:bg-teal-500',
        hoverTextColor: 'group-hover:text-white',
    },
    FaBacterium: {
        bgColor: 'bg-green-100',
        textColor: 'text-green-600',
        hoverBgColor: 'group-hover:bg-green-500',
        hoverTextColor: 'group-hover:text-white',
    },
    GiHeartOrgan: {
        bgColor: 'bg-red-100',
        textColor: 'text-red-600',
        hoverBgColor: 'group-hover:bg-red-500',
        hoverTextColor: 'group-hover:text-white',
    },
    GiDna2: {
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-600',
        hoverBgColor: 'group-hover:bg-purple-500',
        hoverTextColor: 'group-hover:text-white',
    },
    SiMicrogenetics: {
        bgColor: 'bg-pink-100',
        textColor: 'text-pink-600',
        hoverBgColor: 'group-hover:bg-pink-500',
        hoverTextColor: 'group-hover:text-white',
    },
    RiTestTubeLine: {
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-600',
        hoverBgColor: 'group-hover:bg-orange-500',
        hoverTextColor: 'group-hover:text-white',
    }
};

function ServiceCard({ imageSrc, icon: Icon, title }) {
    const iconName = Icon.displayName || Icon.name;
    const colors = colorMap[iconName] || {
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-600',
        hoverBgColor: 'group-hover:bg-gray-200',
        hoverTextColor: 'group-hover:text-white',
    };

    return (
        <div className={`bg-white shadow-lg rounded-md group overflow-hidden`}>
            <div className='overflow-hidden'>
                <img src={imageSrc} alt={title} className="w-full h-56 object-cover transform group-hover:scale-125 transition duration-500" />
            </div>
            <div className="p-8 text-center items-center flex gap-5">
                <div className={`flex justify-center items-center ${colors.bgColor} ${colors.hoverBgColor} rounded-full p-4`}>
                    <Icon className={`${colors.textColor} ${colors.hoverTextColor} transition duration-300`} size={32} />
                </div>
                <div className='flex flex-col items-start'>
                    <h3 className={`text-xl font-bold text-gray-800 mb-2`}>{title}</h3>
                    <Link to='/productdetailpage' className={`text-blue-500 font-medium flex items-center justify-center`}>
                        READ MORE <FaArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ProductsGrid() {
    return (
        <div className="p-4 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] lg:pt-10 xl:pt-16 py-10 px-5 bg-gray-100">
            <div>
                <p className='text-blue-600 font-bold'>____ OUR PRODUCTS</p>
            </div>
            <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                <p className='text-3xl font-bold text-gray-800 md:text-4xl font-daysone'>Products Area</p>
                <p className='py-3 text-gray-500 font-semibold flex flex-wrap gap-2'>
                    We'll Ensure you always get the best results: <span className='flex items-center gap-2 text-blue-600 font-semibold'> CONTACT US <FaArrowRight /> </span>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    imageSrc={p1}
                    icon={GrDocumentTest}
                    title="Hemoglobin Test"
                />
                <ServiceCard
                    imageSrc={p2}
                    icon={LuTestTube2}
                    title="Blood Test"
                />
                <ServiceCard
                    imageSrc={p3}
                    icon={GrTest}
                    title="Biochemistry"
                />
                <ServiceCard
                    imageSrc={p3}
                    icon={FaBacterium}
                    title="Microbiology"
                />
                <ServiceCard
                    imageSrc={p3}
                    icon={GiHeartOrgan}
                    title="Genetics"
                />
                <ServiceCard
                    imageSrc={p3}
                    icon={GiDna2}
                    title="Genetics"
                />
                <ServiceCard
                    imageSrc={p3}
                    icon={SiMicrogenetics}
                    title="Histopathology"
                />
                <ServiceCard
                    imageSrc={p3}
                    icon={RiTestTubeLine}
                    title="Clinical Test"
                />
                {/* Add more ServiceCard components as needed */}
            </div>
        </div>
    );
}

export default ProductsGrid;
