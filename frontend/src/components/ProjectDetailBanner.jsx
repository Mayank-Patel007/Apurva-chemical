import React, { useEffect } from 'react';

function ProjectDetailBanner() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='relative w-full h-52 md:h-72 lg:h-80 xl:h-96 bg-cover bg-fixed bg-center bg-[url("C:\react\Apurva-chemical\frontend\src\assets\blogdetail.jpg")]'>
            <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
            <div className='relative z-10 text-white flex flex-col items-center justify-center h-full'>
                <div className='mb-4'>
                    <p className='text-3xl font-bold md:text-5xl font-montserrat'>Project Detail Page</p>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetailBanner;
