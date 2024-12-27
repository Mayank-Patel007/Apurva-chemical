// src/NewsletterForm.js
import React from 'react';

const Newsletter = () => {
    return (
        <div className="relative py-20 rounded-lg mx-10 bg-newsletter-bg bg-cover bg-fixed bg-center lg:my-10">
            {/* Overlay for Dark Filter */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            
            <div className="container mx-auto px-4 relative z-10 xl:h-72 xl:flex xl:items-center ">
                <div className="max-w-lg mx-auto text-center text-white">
                    <h2 className="text-3xl xl:text-4xl font-bold mb-4 font-daysOne">Newsletter</h2>
                    <p className="text-md mb-8">#Subscribe newsletter to get every update</p>
                    <form className="flex justify-center flex-col gap-2 md:flex-row">
                        <input 
                            type="email" 
                            placeholder="info.yourwebmail@gmail.com" 
                            className="p-3 w-full xl:w-80 text-gray-700 focus:outline-none rounded-lg" 
                        />
                        <button 
                            type="submit" 
                            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg">
                            SUBSCRIBE 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
