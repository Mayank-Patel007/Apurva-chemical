import React from 'react';
import { FaRegUserCircle, FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from "../assets/blog.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blogPosts = [
    {
        author: "Author Name",
        date: "On Date",
        title: "Blog Post Title",
        comments: "Number of Comments",
        image: img,
    },
    {
        author: "Author Name",
        date: "On Date",
        title: "Blog Post Title",
        comments: "Number of Comments",
        image: img,
    }, 
    {
        author: "Author Name",
        date: "On Date",
        title: "Blog Post Title",
        comments: "Number of Comments",
        image: img,
    },
    {
        author: "Author Name",
        date: "On Date",
        title: "Blog Post Title",
        comments: "Number of Comments",
        image: img,
    },
    {
        author: "Author Name",
        date: "On Date",
        title: "Blog Post Title",
        comments: "Number of Comments",
        image: img,
    }, 
    {
        author: "Author Name",
        date: "On Date",
        title: "Blog Post Title",
        comments: "Number of Comments",
        image: img,
    },
];

function Blog() {
    // Use slice to only show the first three blog posts
    const blogPostsToShow = blogPosts.slice(0, 3);

    return (
        <div className="container mx-auto py-10 px-4">
            <div>
                <p className='text-blue-600 font-bold py-8'>____ OUR BLOGS</p>
            </div>
            <div className='space-y-5 py-5 lg:flex lg:items-center lg:justify-between gap-2'>
                <p className='text-4xl font-bold text-gray-800 md:text-4xl font-daysone'>BLOGS & ARTICLES</p>
            </div>
            <div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {blogPostsToShow.map((post, index) => (
                        <div key={index} className="relative border rounded-lg overflow-hidden group hover:shadow-lg">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-48 object-cover group-hover:scale-110 duration-300 rounded-t-lg" 
                            />
                            <div className="p-6 bg-white">
                                <div className="flex items-center space-x-3 text-gray-600 mb-3">
                                    <FaRegUserCircle size={24} />
                                    <div>
                                        <p className="font-semibold capitalize">{post.author}</p>
                                        <p className="text-gray-500 text-sm">{post.date}</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-500 capitalize">{post.title}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <Link 
                                        to="/blogdetail" 
                                        className="text-blue-600 font-bold hover:text-blue-500"
                                        onClick={() => console.log('Navigating to Single Blog')}
                                    >
                                        Read more {'>'}
                                    </Link>
                                    <div className="flex items-center text-gray-500">
                                        <FaRegCommentAlt className="mr-1" />
                                        <p>{post.comments}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
