import React from 'react'
import img1 from '../assets/contact-01.svg'
import img2 from '../assets/contact-02.svg'
import img3 from '../assets/contact-03.svg'

function Contactus() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-8 ">
            <div className="w-full md:w-1/3 lg:w-[22%] flex flex-col gap-16 mb-8 flex-shrink-0">
                <div className=" border border-[#ECEEF3] hover:border-[#10D0A1] rounded pl-[25px] pr-[25px] py-[51px] ">
                    <div className="flex flex-col items-center mb-2 ">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-blue-500 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657l-4.95-4.95a4 4 0 015.657-5.657l4.95 4.95a4 4 0 01-5.657 5.657z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 2a10 10 0 0110 10v10H4V12a10 10 0 0110-10z"
                            />
                        </svg> */}
                        <img className='py-4' src={img1} alt="img" />
                        <h3 className=" text-2xl font-bold text-indigo-950 ml-2 text-center">Address line</h3>
                    </div>
                    <p className="text-indigo-950 text-center text-lg">Bowery St, New York, NY 10013, USA</p>
                </div>
                <div className=" border border-[#ECEEF3] hover:border-[#10D0A1] rounded pl-[25px] pr-[25px] py-[51px]">
                    <div className="flex flex-col items-center mb-2 ">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-500 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657l-4.95-4.95a4 4 0 015.657-5.657l4.95 4.95a4 4 0 01-5.657 5.657z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 2a10 10 0 0110 10v10H4V12a10 10 0 0110-10z"
                            />
                        </svg> */}
                        <img className='py-4' src={img2} alt="img" />
                        <h3 className="text-2xl font-bold text-indigo-950 ml-2 text-center">Phone Number</h3>
                    </div>
                    <p className="text-indigo-950 text-center text-lg">+1255 - 568 - 6523</p>
                    <p className="text-indigo-950 text-center text-lg">+1255 - 568 - 6523</p>
                </div>
                <div className=" border border-[#ECEEF3] hover:border-[#10D0A1] rounded pl-[25px] pr-[25px] py-[51px]">
                    <div className="flex flex-col items-center mb-2 ">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-500 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657l-4.95-4.95a4 4 0 015.657-5.657l4.95 4.95a4 4 0 01-5.657 5.657z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 2a10 10 0 0110 10v10H4V12a10 10 0 0110-10z"
                            />
                        </svg> */}
                        <img className='py-4' src={img3} alt="img" />
                        <h3 className="text-2xl font-bold text-indigo-950 ml-2 text-center">Opening Hours</h3>
                    </div>
                    <p className="text-indigo-950 text-center text-lg">Monday - Friday </p>
                    <p className="text-indigo-950 text-center text-lg">09:00 AM - 05:00 PM</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-2/3 ">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message :</h2>
                <form className="flex flex-col gap-8">
                    <div className='flex flex-col lg:flex-row gap-8 '>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className=" w-full p-4 border border-gray-100 rounded shadow-xl [box-shadow:0px_16px_24px_rgba(189,_196,_205,_0.13)] hover:border-[#0E63FF] focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            className="w-full p-4 border border-gray-100 rounded shadow-xl [box-shadow:0px_16px_24px_rgba(189,_196,_205,_0.13)] hover:border-[#0E63FF] focus:outline-none"
                        />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 w-full'>
                        <input
                            type="text"
                            placeholder="Enter your number"
                            className="w-full p-4 border border-gray-100 rounded shadow-xl [box-shadow:0px_16px_24px_rgba(189,_196,_205,_0.13)] hover:border-[#0E63FF] focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Enter your website"
                            className="w-full p-4 border border-gray-100 rounded shadow-xl [box-shadow:0px_16px_24px_rgba(189,_196,_205,_0.13)] hover:border-[#0E63FF] focus:outline-none"
                        />
                    </div>
                    <textarea
                        placeholder="Type your comment"
                        className="p-4 border border-gray-100 rounded md:col-span-2 shadow-xl [box-shadow:0px_16px_24px_rgba(189,_196,_205,_0.13)] hover:border-[#0E63FF] focus:outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="md:col-span-2 bg-blue-600 text-white py-4 px-8 rounded w-fit"
                    >
                        SEND MESSAGE
                    </button>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3063952470457!2d72.94761097485656!3d20.370253081119294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cef9e01fc3d9%3A0x655fc46b5dbf6964!2sAPURVA%20CHEMICALS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1724434436265!5m2!1sen!2sin" height="450" className='border-0 mt-16 w-full rounded-md' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contactus
