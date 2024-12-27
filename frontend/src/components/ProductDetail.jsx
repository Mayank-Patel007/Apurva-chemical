import React, { useState } from 'react';
import product1 from '../assets/product1.jpg';
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import img1 from "../assets/mission1.jpg";
import img2 from "../assets/mission2.jpg";
import img4 from "../assets/value1.jpg";
import img5 from "../assets/value2.jpg";
import profile1 from "../assets/profile1.jpeg"
import profile2 from "../assets/profile2.jpeg"
import profile3 from "../assets/profile3.jpeg"

function ProductDetail() {
    const [activeSection, setActiveSection] = useState('details'); // State to manage active section

    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle the visibility of the answer
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='p-4 md:px-10 lg:px-12 xl:px-20 2xl:px-[600px] lg:pt-10 xl:pt-10 py-24 space-y-16'>
            <div className='md:flex md:gap-10'>
                <div className='md:w-1/2'>
                    <img className='rounded-2xl' src={product1} alt="Product" />
                </div>
                <div className='md:w-1/2'>
                    <div className='space-y-5 py-5'>
                        <p className='text-3xl font-bold'>Medical Hand Gloves</p>
                        <p>Lorem Lorem occaecat quis enim ex. Laboris veniam quis dolore minim veniam. In ad eu pariatur tempor exercitation aliqua consectetur.</p>
                        <div className='flex items-center gap-5'>
                            <p className='flex text-yellow-500 space-x-1'>
                                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
                            </p>
                            <p>(4 customer reviews)</p>
                        </div>
                        <p className='text-3xl font-bold'>$28.00 <span className='font-semibold text-2xl text-gray-400 shadow-slate-200'>/38</span></p>
                    </div>
                    <div className='py-3 space-y-3'>
                        <div className='space-y-2'>
                            <p className='text-lg font-semibold'>Choose Color</p>
                            <ul className='flex gap-4'>
                                <li className='bg-gray-100 p-1 rounded-lg text-gray-500 font-medium'>TYK</li>
                                <li className='bg-gray-100 p-1 rounded-lg text-gray-500 font-medium'>FFD2</li>
                                <li className='bg-gray-100 p-1 rounded-lg text-gray-500 font-medium'>23TT</li>
                                <li className='bg-gray-100 p-1 rounded-lg text-gray-500 font-medium'>R454</li>
                                <li className='bg-gray-100 p-1 rounded-lg text-gray-500 font-medium'>45HY</li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>Quantity</p>
                            <input className='border' type="number" />
                        </div>
                    </div>
                    <div className='space-x-5 md:space-y-5'>
                        <button className='bg-blue-500 text-white p-5 px-8 rounded-lg font-medium hover:bg-blue-400'>ADD TO CART</button>
                        <button className='bg-teal-500 text-white p-5 px-8 rounded-lg font-medium hover:bg-teal-400'>BUY NOW</button>
                    </div>
                </div>
            </div>

            {/* Section Switcher */}
            <div className='flex justify-center space-x-2  '>
                <button
                    onClick={() => setActiveSection('details')}
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'details' && 'border-b-teal-500 text-white bg-blue-500  shadow-lg'}`}
                >
                    Product Details
                </button>
                <button
                    onClick={() => setActiveSection('info')}
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'info' && 'border-b-teal-500 text-white bg-blue-500 shadow-lg'}`}
                >
                    Additional Info
                </button>
                <button
                    onClick={() => setActiveSection('reviews')}
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'reviews' && 'border-b-teal-500 text-white bg-blue-500 shadow-lg'}`}
                >
                    Reviews
                </button>
                <button
                    onClick={() => setActiveSection('faqs')}
                    className={`bg-gray-200 p-2 md:px-16 md:py-6 xl:px-32 rounded hover:border-b-4 border-b-teal-500 hover:text-gray-800 hover:bg-white hover:shadow-lg text-gray-500 font-bold ${activeSection === 'faqs' && 'border-b-teal-500 text-white bg-blue-500 shadow-lg'}`}
                >
                    Faq
                </button>
            </div>

            {/* Conditional Rendering of Sections */}
            {activeSection === 'details' && (
                <div className='space-y-5'>
                    <p className=' px-4 '>Ad cillum incididunt non elit qui dolor et ea. Amet exercitation ex non ipsum. Commodo est Lorem exercitation ullamco non tempor aliqua esse cupidatat ullamco exercitation non. Fugiat in ullamco esse ea enim. Detailed description of the product goes here. etailed description of the product goes here. Provide more information about the product features, specifications, and benefits. Provide more information about the product features, specifications, and benefits.</p>
                    <p className=' px-4 '>Detailed description of the product goes here. Provide more information about the product features, specifications, and benefits. etailed description of the product goes here. Provide more information about the product features, specifications, and benefits. etailed description of the product goes here. Provide more information about the product features, specifications, and benefits.</p>
                </div>
            )}

            {activeSection === 'info' && (
                <div className="w-full ">
                    <table className="w-full">
                        <tbody className='rounded-lg'>
                            <tr className="bg-gray-100">
                                <td className="p-4 font-semibold">Weight</td>
                                <td className="p-4">2 lbs</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="p-4 font-semibold">Dimensions</td>
                                <td className="p-4">12 x 16 x 19 in</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="p-4 font-semibold">Product</td>
                                <td className="p-4">Purchase this product on rag-bone.com</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="p-4 font-semibold">Color</td>
                                <td className="p-4">Gray, Black</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="p-4 font-semibold">Size</td>
                                <td className="p-4">S, M, L, XL</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="p-4 font-semibold">Model</td>
                                <td className="p-4">Model</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="p-4 font-semibold">Shipping</td>
                                <td className="p-4">Standard shipping: $5.95L</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="p-4 font-semibold">Care Info</td>
                                <td className="p-4">Machine Wash up to 40C/86F Gentle Cycle</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="p-4 font-semibold">Brand</td>
                                <td className="p-4">Kazen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            )}

            {activeSection === 'reviews' && (
                <div>
                    <div className=''>
                        <div className='flex flex-col justify-center items-center space-y-5 pb-10'>
                            <p className='text-xl font-semibold font-daysOne px-2 md:text-4xl md:px-10'>3 views for "Wide Cotton Tunic extreme hammer"</p>
                        </div>

                        <div className='space-y-10'>
                            <div className='flex'>
                                <div className='w-1/3 md:w-1/5 lg:pl-20'>
                                    <img className='h-20 w-20 rounded-full' src={profile1} alt="img" />
                                </div>
                                <div className='w-2/3 md:w-4/5 space-y-4 '>
                                    <div className='lg:flex lg:justify-between' >
                                        <div>
                                            <p className='text-lg font-bold'>Emily Doe</p>
                                            <p className='text-gray-500'>March 27, 2018 9:51 am</p>
                                        </div>                                        <div>
                                            <p className='flex py-4 lg:py-0 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                        </div>
                                    </div>
                                    <p>Nisi nostrud reprehenderit quis est irure et elit ea Lorem. Ullamco anim sit mollit dolore veniam eiusmod aliquip. Incididunt nostrud veniam laborum nisi enim Lorem deserunt do non mollit laborum enim. Consequat laboris et laborum excepteur occaecat in eu est fugiat sunt esse irure anim. Sint officia mollit dolor enim adipisicing ut cillum minim officia laborum est esse nostrud consequat. Velit nostrud nisi esse deserunt cillum magna duis culpa.</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/3 md:w-1/5 lg:pl-20'>
                                    <img className='h-20 w-20 rounded-full' src={profile2} alt="img" />
                                </div>
                                <div className='w-2/3 md:w-4/5 space-y-5'>
                                    <div className='lg:flex lg:justify-between' >
                                        <div>
                                            <p className='text-lg font-bold'>John Doe</p>
                                            <p className='text-gray-500'>March 27, 2018 9:51 am</p>
                                        </div>                                        <div>
                                            <p className='flex py-4 lg:py-0 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                        </div>
                                    </div>
                                    <p>Nisi nostrud reprehenderit quis est irure et elit ea Lorem. Ullamco anim sit mollit dolore veniam eiusmod aliquip. Incididunt nostrud veniam laborum nisi enim Lorem deserunt do non mollit laborum enim. Consequat laboris et laborum excepteur occaecat in eu est fugiat sunt esse irure anim. Sint officia mollit dolor enim adipisicing ut cillum minim officia laborum est esse nostrud consequat. Velit nostrud nisi esse deserunt cillum magna duis culpa.</p>
                                </div>
                            </div> <div className='flex'>
                                <div className='w-1/3 md:w-1/5 lg:pl-20'>
                                    <img className='h-20 w-20 rounded-full' src={profile3} alt="img" />
                                </div>
                                <div className='w-2/3 md:w-4/5 space-y-5'>
                                    <div className='lg:flex lg:justify-between' >
                                        <div>
                                            <p className='text-lg font-bold'>Mark J</p>
                                            <p className='text-gray-500'>March 27, 2018 9:51 am</p>
                                        </div>                                        <div>
                                            <p className='flex py-4 lg:py-0 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                        </div>
                                    </div>
                                    <p>Nisi nostrud reprehenderit quis est irure et elit ea Lorem. Ullamco anim sit mollit dolore veniam eiusmod aliquip. Incididunt nostrud veniam laborum nisi enim Lorem deserunt do non mollit laborum enim. Consequat laboris et laborum excepteur occaecat in eu est fugiat sunt esse irure anim. Sint officia mollit dolor enim adipisicing ut cillum minim officia laborum est esse nostrud consequat. Velit nostrud nisi esse deserunt cillum magna duis culpa.</p>
                                </div>
                            </div> <div className='flex'>
                                <div className='w-1/3 md:w-1/5 lg:pl-20'>
                                    <img className='h-20 w-20 rounded-full' src={profile1} alt="img" />
                                </div>
                                <div className='w-2/3 md:w-4/5 space-y-5'>
                                    <div className='lg:flex lg:justify-between' >
                                        <div>
                                            <p className='text-lg font-bold'>Marry Li</p>
                                            <p className='text-gray-500'>March 27, 2018 9:51 am</p>
                                        </div>                                        <div>
                                            <p className='flex py-4 lg:py-0 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                        </div>
                                    </div>
                                    <p>Nisi nostrud reprehenderit quis est irure et elit ea Lorem. Ullamco anim sit mollit dolore veniam eiusmod aliquip. Incididunt nostrud veniam laborum nisi enim Lorem deserunt do non mollit laborum enim. Consequat laboris et laborum excepteur occaecat in eu est fugiat sunt esse irure anim. Sint officia mollit dolor enim adipisicing ut cillum minim officia laborum est esse nostrud consequat. Velit nostrud nisi esse deserunt cillum magna duis culpa.</p>
                                </div>
                            </div> <div className='flex'>
                                <div className='w-1/3 md:w-1/5 lg:pl-20'>
                                    <img className='h-20 w-20 rounded-full' src={profile2} alt="img" />
                                </div>
                                <div className='w-2/3 md:w-4/5 space-y-5'>
                                    <div className='lg:flex lg:justify-between' >
                                        <div>
                                            <p className='text-lg font-bold'>John M</p>
                                            <p className='text-gray-500'>March 27, 2018 9:51 am</p>
                                        </div>                                        <div>
                                            <p className='flex py-4 lg:py-0 text-yellow-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                        </div>
                                    </div>
                                    <p>Nisi nostrud reprehenderit quis est irure et elit ea Lorem. Ullamco anim sit mollit dolore veniam eiusmod aliquip. Incididunt nostrud veniam laborum nisi enim Lorem deserunt do non mollit laborum enim. Consequat laboris et laborum excepteur occaecat in eu est fugiat sunt esse irure anim. Sint officia mollit dolor enim adipisicing ut cillum minim officia laborum est esse nostrud consequat. Velit nostrud nisi esse deserunt cillum magna duis culpa.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=" bg-white  rounded-lg py-10">
                        <div className='py-3 space-y-4'>
                            <p className='text-3xl font-bold font-daysOne'>Add a review</p>
                            <p className='text-gray-600'>Your email address will not be published. Required fileds are marked</p>
                            <p className='flex items-center gap-2 text-lg'>Overall ratings <span className='flex items-center space-x-1 text-yellow-400'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span></p>
                        </div>
                        <form class="space-y-4">
                            <div>
                                <textarea id="review" rows="4" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300" placeholder="Your reviews..."></textarea>
                            </div>
                            <div>
                                <input type="text" id="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name*" />
                            </div>

                            <div>
                                <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email" />
                            </div>

                            <div>
                                <button type="submit" className=" bg-blue-500 text-white py-4 px-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font">SUBMT  </button>
                            </div>
                        </form>
                    </div>

                </div>
            )}

            {activeSection === 'faqs' && (
                <div className=" p-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

                    {/* FAQ Item 1 */}
                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">What is your return policy?</span>
                            <button
                                onClick={() => toggleFAQ(0)}
                                className="text-gray-500 focus:outline-none">
                                {activeIndex === 0 ? '-' : '+'}
                            </button>
                        </div>
                        {activeIndex === 0 && (
                            <div className="mt-2 text-gray-600 border-b-4 border-b-blue-500 px-2 py-4">
                                Our return policy allows you to return products within 30 days of purchase. Please ensure the items are unused and in original packaging.
                            </div>
                        )}
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">How long does shipping take?</span>
                            <button
                                onClick={() => toggleFAQ(1)}
                                className="text-gray-500 focus:outline-none">
                                {activeIndex === 1 ? '-' : '+'}
                            </button>
                        </div>
                        {activeIndex === 1 && (
                            <div className="mt-2 text-gray-600 border-b-4 border-b-blue-500 px-2 py-4">
                                Shipping usually takes 5-7 business days depending on your location and the shipping method chosen.
                            </div>
                        )}
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">Do you offer international shipping?</span>
                            <button
                                onClick={() => toggleFAQ(2)}
                                className="text-gray-500 focus:outline-none">
                                {activeIndex === 2 ? '-' : '+'}
                            </button>
                        </div>
                        {activeIndex === 2 && (
                            <div className="mt-2 text-gray-600 border-b-4 border-b-blue-500 px-2 py-4">
                                Yes, we offer international shipping to many countries. Shipping costs and times may vary based on location.
                            </div>
                        )}
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">Can I change my order after placing it?</span>
                            <button
                                onClick={() => toggleFAQ(3)}
                                className="text-gray-500 focus:outline-none">
                                {activeIndex === 3 ? '-' : '+'}
                            </button>
                        </div>
                        {activeIndex === 3 && (
                            <div className="mt-2 text-gray-600 border-b-4 border-b-blue-500 px-2 py-4">
                                You can change your order within 24 hours of placing it. Please contact our customer support to assist you with any changes.
                            </div>
                        )}
                    </div>

                    {/* FAQ Item 5 */}
                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">What payment methods do you accept?</span>
                            <button
                                onClick={() => toggleFAQ(4)}
                                className="text-gray-500 focus:outline-none">
                                {activeIndex === 4 ? '-' : '+'}
                            </button>
                        </div>
                        {activeIndex === 4 && (
                            <div className="mt-2 text-gray-600 border-b-4 border-b-blue-500 px-2 py-4">
                                We accept various payment methods including credit cards, debit cards, PayPal, and bank transfers.
                            </div>
                        )}
                    </div>

                    {/* FAQ Item 6 */}
                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">How can I track my order?</span>
                            <button
                                onClick={() => toggleFAQ(5)}
                                className="text-gray-500 focus:outline-none">
                                {activeIndex === 5 ? '-' : '+'}
                            </button>
                        </div>
                        {activeIndex === 5 && (
                            <div className="mt-2 text-gray-600 border-b-4 border-b-blue-500 px-2 py-4">
                                Once your order has shipped, you will receive an email with a tracking number and link to track your order's progress.
                            </div>
                        )}
                    </div>
                </div>

            )}
        </div>
    );
}

export default ProductDetail;
