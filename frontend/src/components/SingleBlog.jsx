import React, { useState } from 'react'
import previous from '../assets/previous.jpg'
import next from '../assets/next.jpg'
import profile1 from '../assets/profile1.jpeg'
import profile2 from '../assets/profile2.jpeg'
import { TbScanEye } from "react-icons/tb";
import { FiSearch } from 'react-icons/fi';
import { FaRegFolder } from "react-icons/fa6";
import Slider from 'react-slick';
import { FaShareAlt } from "react-icons/fa";
import blogdetail from "../assets/blogdetail.jpg"
import mission1 from "../assets/mission1.jpg"
import mission2 from "../assets/mission2.jpg"

function SingleBlog() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
       
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    const posts = [
        {
            id: 1,
            date: '10th Sept, 2020',
            title: "Don't Underestimate Tree for Medicine",
            category: 'Commercial',
            image: mission1 
        },
        {
            id: 2,
            date: '15th Sept, 2020',
            title: "Equipping Researchers in the Developing World",
            category: 'Education',
            image: mission2
        },
        {
            id: 3,
            date: '20th Sept, 2020',
            title: "Role of Genetics in treating Heigh-grade glioma",
            category: 'Review',
            image: mission1
        },
    ];

    const tags = ["COVID-19", "GENE", "TEST", "LAB", "DATA", "VIRUS", "PANDEMIC", "SYMPTOMS", "MEDICINE","BACTERIA"];

    const comments = [
        {
            name: "Isaac Herman",
            date: "June 14, 2020 [11.45AM]",
            comment: "How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
            profileImg: profile1// Dummy profile image URL
        },
        {
            name: "William Cobus",
            date: "June 14, 2020 [11.20AM]",
            comment: "Undertakes laborious physical exercise, except to obtain some advantage from it but who has any right to find fault.",
            profileImg: profile2
        }
    ];

    return (
        <div className='lg:flex lg:py-10 lg:px-2 xl:py-16 xl:px-20'>

            {/* L H S  */}

            <div className='lg:w-2/3'>

                {/* 3 card  */}

                <div className='m-5 space-y-5'>
                <div><img src={blogdetail} className='rounded' alt="img" /></div>
                    <p className='text-2xl font-semibold font-montserrat'>Reduce Liability Risk</p>
                    <p className='text-gray-600 text-lg font-nunito'>In a free hour when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided but in certain circumstances and owing to the claims of duty or the obligations.</p>
                </div>

                {/* 5 card  */}
                <div className='m-5 space-y-5 font-nunito'>
                    <p className='text-gray-600 text-lg'>Through weakness of will, which is the same as saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish in a free.</p>
                    <p className='text-gray-600 text-lg'>These cases are perfectly simple and easy to distinguish. In a free hour, when our power.</p>
                </div>

                <div className='m-5 space-y-10 md:space-y-0 md:gap-8 md:flex'>
                    <div className='md:w-1/2'>
                        <img src={previous} alt="img1" />
                    </div>
                    <div className='md:w-1/2'>
                        <img src={next} alt="img2" /></div>
                </div>

                {/* 6 card  */}

                <div className='m-5 space-y-5 py-5'>
                    <p className='text-2xl font-semibold font-montserrat'>CCTV Can Prevent Crime</p>
                    <p className='text-gray-600 text-lg font-nunito'>
                        Rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                    </p>
                    <ul className='md:space-y-2 font-nunito'>
                        <li className='text-gray-600 text-lg flex gap-2 '>
                            <div><TbScanEye className='text-gray-500' size={24} /></div>
                            Undertakes laborious physical exercise
                        </li>
                        <li className='text-gray-600 text-lg flex gap-2 '>
                            <div><TbScanEye className='text-gray-500' size={24} /></div>
                            Advantage from it? But who has any right to find fault with a man
                        </li>
                        <li className='text-gray-600 text-lg flex gap-2 '>
                            <div><TbScanEye className='text-gray-500' size={24} /></div>
                            Who chooses to enjoy a pleasure consequences
                        </li>
                        <li className='text-gray-600 text-lg flex gap-2 '>
                            <div><TbScanEye className='text-gray-500' size={24} /></div>
                            Complete account of the system & expound the actual teaching
                        </li>
                    </ul>
                </div>

                {/* share card  */}

                <div className='m-4 rounded-lg bg-gray-100 md:flex md:justify-between md:items-center md:text-center'>
                    <div className='flex flex-wrap p-6 gap-3 font-nunito'>
                        <p className='bg-white hover:bg-teal-500 hover:text-white rounded duration-500 cursor-pointer p-3'>COVID-19</p>
                        <p className='bg-white hover:bg-teal-500 hover:text-white rounded duration-500 cursor-pointer p-3'>BACTERIA</p>
                        <p className='bg-white hover:bg-teal-500 hover:text-white rounded duration-500 cursor-pointer p-3'>MEDICINE</p>
                    </div>
                    <p className='flex items-center gap-2 text-gray-500 font-medium  p-6   hover:text-teal-500 md:flex md:text-center md:justify-between font-montserrat '>Share this post <div><FaShareAlt /></div></p>
                </div>



                {/* card  */}

                <div className="p-4">
                    <p className="text-2xl font-semibold mb-6 font-montserrat">Comments</p>
                    {comments.map((comment, index) => (
                        <div key={index} className="mb-6 ">
                            <div className="flex items-start mb-2 py-5 gap-1 md:gap-2">
                                <img src={comment.profileImg} alt={`${comment.name}'s profile`} className="h-20 w-20  mr-4" />
                                <div className='space-y-5'>
                                    <div className=" md:flex md:justify-between md:items-center">
                                        <p className="font-semibold text-2xl font-montserrat">{comment.name}</p>
                                        <p className="text-gray-400 text-base font-medium font-nunito">{comment.date}</p>
                                    </div>
                                    <p className="text-gray-700 text-lg font-nunito">{comment.comment}</p>
                                    <button className="text-gray-500 hover:underline mt-2 flex items-center font-medium font-montserrat">
                                        Reply
                                    </button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}

                    {/* form  */}

                    <div className="bg-white p-6 rounded-lg shadow-md mt-10 border">
                        <h2 className="text-2xl font-semibold mb-4 font-montserrat">Send Your Comment</h2>
                        <p className="text-gray-500 text-lg mb-4 font-nunito">Your email address will not be published. Required fields are marked *</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="font-nunito border border-gray-300 bg-gray-100 p-4 rounded-lg w-full"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="font-nunito border border-gray-300 bg-gray-100 p-4 rounded-lg w-full"
                                    required
                                />
                            </div>
                            <textarea
                                placeholder="Comment ..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="font-nunito border border-gray-300 bg-gray-100 p-4 rounded-lg w-full h-32 mb-4"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-gray-900 text-white w-full py-4 rounded hover:bg-teal-500 font-montserrat"
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Post Comment'}
                            </button>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>

            {/* keyword  */}

            <div className='lg:w-1/3 space-y-16'>
                <div className='p-5 m-4 shadow-md rounded'>
                    <div className="flex items-center py-2 gap-2">
                        <input
                            className="font-nunito appearance-none bg-white border border-gray-300 rounded w-full text-gray-700 py-4 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="SEARCH POST"
                            aria-label="Search"
                        />
                        <button className="flex-shrink-0 text-white bg-gray-900 hover:text-white hover:bg-teal-500 p-4 rounded">
                            <FiSearch size={20} />
                        </button>
                    </div>
                </div>


                {/* categories  */}

                <div className='m-4 shadow-md'>
                    <div className='p-5 py-10'>
                        <p className="text-2xl font-semibold mb-6 font-montserrat">Categories</p>
                        <hr className='border-4 rounded w-1/6 border-teal-500 my-4' />
                        <ul className='space-y-3 font-nunito'>
                            <li className='flex items-center gap-2 text-gray-600 text-lg bg-white p-3 rounded hover:bg-teal-500 hover:text-white cursor-pointer'><div><FaRegFolder /></div>CHEMISTRY</li>
                            <li className='flex items-center gap-2 text-gray-600 text-lg bg-white p-3 rounded hover:bg-teal-500 hover:text-white cursor-pointer'><div><FaRegFolder /></div>FORENSIC SCIENCE</li>
                            <li className='flex items-center gap-2 text-gray-600 text-lg bg-white p-3 rounded hover:bg-teal-500 hover:text-white cursor-pointer'><div><FaRegFolder /></div>GEMOLOGICAL</li>
                            <li className='flex items-center gap-2 text-gray-600 text-lg bg-white p-3 rounded hover:bg-teal-500 hover:text-white cursor-pointer'><div><FaRegFolder /></div>COVID ANALYSIS</li>
                            <li className='flex items-center gap-2 text-gray-600 text-lg bg-white p-3 rounded hover:bg-teal-500 hover:text-white cursor-pointer'><div><FaRegFolder /></div>BECTERIOLOGY</li>
                            <li className='flex items-center gap-2 text-gray-600 text-lg bg-white p-3 rounded hover:bg-teal-500 hover:text-white cursor-pointer'><div><FaRegFolder /></div>ANGIOSPERM</li>
                        </ul>
                    </div>
                </div>


                {/* slide  */}
                <div className='m-4 shadow-md rounded'>
                    <div className='p-5 py-10'>
                        <p className="text-2xl font-semibold mb-6 font-montserrat">Latest Post</p>
                        <hr className='border-4 rounded w-1/6 border-teal-500 my-4' />
                        <Slider {...settings}>
                            {posts.map((post) => (
                                <div key={post.id} className='p-4 w-full md:w-full'>
                                    <div className='relative'>
                                        <img src={post.image} alt="img" className='rounded w-full object-cover' />
                                        <p className='flex items-center gap-2 bottom-0 absolute bg-teal-500 text-white p-2 md:px-4 rounded font-nunito'>
                                            <FaRegFolder />{post.category}
                                        </p>
                                    </div>
                                    <div className='pt-5 space-y-3'>
                                        <p className='text-gray-500 font-nunito'>{post.date}</p>
                                        <p className='text-gray-800 font-medium text-lg pr-4 font-montserrat'>{post.title}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>



                {/* tags card  */}

                <div className="p-6 m-4 shadow-md rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center font-daysOne">
                       Popular Tags
                    </h3>
                    <hr className='border-4 rounded w-1/6 border-teal-500 my-4' />
                    <div className="flex flex-wrap gap-3 font-nunito">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-white font-semibold text-gray-700 px-5 py-2 rounded shadow hover:bg-teal-500 hover:text-white cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

               

            </div>

        </div>
    )
}

export default SingleBlog
