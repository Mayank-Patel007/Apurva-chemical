import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoIosAdd } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaInstagram, FaYoutube, FaStar } from "react-icons/fa";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import gsap from "gsap";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showUpIcon, setShowUpIcon] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const upIconRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setOpenDropdown(null);
    };

    const toggleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowUpIcon(true);
            gsap.to(upIconRef.current, { opacity: 1, duration: 0.5, y: 0 });
        } else {
            setShowUpIcon(false);
            gsap.to(upIconRef.current, { opacity: 0, duration: 0.5, y: -200 });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        gsap.set(upIconRef.current, { y: -200, opacity: 0 });
    }, []);

    const menuItems = [
        { title: 'Home', path: "/" },
        { title: 'About', subItems: [{ title: 'Our Company', path: "/aboutus" }, { title: 'Professional Team', path: "/team" }] },
        { title: 'Services', subItems: [{ title: 'All Services', path: "/services" }] },
        { title: 'Products', subItems: [{ title: 'Category 1', path: "/product" }, { title: 'Category 2', path: "/product" }, { title: 'Category 3', path: "/product" }] },
        { title: 'Blog', path: "/blog" },
        { title: 'Contact', path: "/contact" }
    ];

    return (
        <>
            <div className='sticky top-0 z-50 bg-white w-full border-b-2'>
                {/* Mobile Menu */}
                <div className='flex items-center justify-between px-4 py-4 lg:px-6 lg:py-4 w-full lg:hidden'>
                    <div className='flex justify-center items-center '>
                        <img src="" alt="" /><p className='text-[40px]  font-bold'>LOGO</p>
                    </div>
                    <div onClick={toggleMenu}>
                        <IoMenuSharp size={32} className={`${isMenuOpen ? 'hidden' : 'block'}`} />
                    </div>
                    {/* Mobile Menu Content */}
                    {isMenuOpen && (
                        <div className='fixed top-0 right-0  h-full bg-indigo-950 z-10 flex flex-col overflow-y-auto p-8 w-[90%]'>
                            <div className='flex justify-between p-4'>
                                <p className='text-white '>LOGO</p>
                                <IoClose size={32} className='text-white bg-teal-500 ' onClick={toggleMenu} />
                            </div>
                            <ul className='flex flex-col w-full'>
                                {menuItems.map((item, index) => (
                                    <li key={index} className={`flex flex-col items-center ${index !== menuItems.length - 1 ? 'border-b border-gray-700' : ''} w-full p-2`}>
                                        <div className='flex justify-between items-center text-white w-full uppercase' onClick={() => toggleDropdown(index)}>
                                            <span>{item.title}</span>  {item.subItems && (
                                                <div className='border border-gray-700'>
                                                    <IoIosAdd
                                                        size={25} className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-45 text-teal-500' : ''}`}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {item.subItems && openDropdown === index && (
                                            <ul className='flex flex-col text-white items-center space-y-2 w-full'>
                                                {item.subItems.map((subItem, subIndex) => {
                                                    if (subItem.title === "Shopping Cart") {
                                                        return null;
                                                    }
                                                    return (
                                                        <li key={subIndex} className={`w-full px-4 py-2  ${subIndex !== item.subItems.length - 1 ? 'border-b border-gray-700' : ''}`}>
                                                            <Link to={subItem.path}>{subItem.title}</Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col items-start px-2 justify-center w-full space-y-5 lg:hidden'>
                                <div className='text-white space-y-3 pt-10'>
                                    <p className='text-xl  uppercase text-gray-400'>Contact Us</p>
                                    <div className='flex gap-2'>
                                        <FaStar size={25} className='text-yellow-300' />
                                        <p className=''>Chicago 12, Melbourne City, USA</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <FaStar size={25} className='text-yellow-300' />
                                        <p className=''>61 383 766 284</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <FaStar size={25} className='text-yellow-300' />
                                        <p className=''>Chicago 12, Melbourne City, USA</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center space-x-5'>
                                    <FaTwitter size={20} color='white' />
                                    <FaFacebookF size={20} color='white' />
                                    <FaPinterestP size={20} color='white' />
                                    <FaInstagram size={20} color='white' />
                                    <FaYoutube size={20} color='white' />
                                </div>
                            </div>
                        </div>
                    )}


                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:block'>
                    <div className='flex items-center w-full bg-white font-semibold'>
                        <div className='w-[20%]  flex justify-center items-center '>
                            <img src="" alt="" /><p className='text-[59px]  font-bold'>LOGO</p>
                        </div>

                        <div className='w-[80%] flex flex-col border-l '>
                            <div className='border-b'>
                                <div className='flex justify-between items-center px-8 py-4'>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <p>icon</p>
                                        <p className='uppercase'>Help Desk : +91 59008855</p>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <p>icon</p>
                                        <p>Monday - Friday 09:00 am - 05:00 Pm</p>
                                    </div>
                                </div>
                            </div>
                            {/* Menu Items */}
                            <div className='lg:flex justify-between items-center hidden '>
                                <div className='hidden lg:flex items-center justify-center space-x-5 pl-8'>
                                    {menuItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className='relative cursor-pointer flex items-center font-montserrat group'
                                        >
                                            <Link
                                                to={item.subItems ? '#' : item.path}
                                                className='inline-block hover:text-teal-500'
                                            >
                                                {item.title}
                                            </Link>
                                            {item.subItems && (
                                                <span className='ml-1'>
                                                    <IoIosArrowDown />
                                                </span>
                                            )}
                                            {item.subItems && (
                                                <ul className='absolute top-full mt-2 left-0 bg-white border border-gray-300 rounded w-48 z-20 border-b-4 border-b-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                    {item.subItems.map((subItem, subIndex) => {
                                                        if (subItem.title === "Shopping Cart") {
                                                            return null;
                                                        }
                                                        return (
                                                            <li
                                                                key={subIndex}
                                                                className='px-4 py-2 hover:bg-teal-500 hover:text-white'
                                                            >
                                                                <Link to={subItem.path}>{subItem.title}</Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className='md:flex gap-4 hidden '>
                                    <div className='hidden md:flex items-center justify-center gap-4 '>
                                        <div className=' p-1'>icon</div>
                                        <div className=' p-1'>icon</div>
                                    </div>
                                    <button className='border border-gray-400 px-8 py-4 bg-blue-700 text-white h-full leading-10'>BOOK APPOINTMENT</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll-to-top icon */}
            {showUpIcon && (
                <div
                    ref={upIconRef}
                    className="fixed bottom-8 right-8 w-10 h-10 bg-teal-500 text-white rounded-md flex items-center justify-center cursor-pointer z-50"
                    onClick={scrollToTop}
                >
                    <IoIosArrowUp size={24} />
                </div>
            )}
        </>
    );
}

export default Navbar;