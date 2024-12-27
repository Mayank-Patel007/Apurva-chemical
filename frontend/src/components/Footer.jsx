import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-12 lg:px-5 xl:px-10">
            <div className="px-4 md:px-5">
                {/* Use grid layout for larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Feel Free to Contact Us</h5>
                        <p className="text-2xl xl:text-4xl font-bold text-blue-900">61 383 766 284</p>
                        <p>noreply@envato.com</p>

                        <div className="mt-20">
                            <h5 className="text-lg font-bold mb-4">Career</h5>
                            <p className="w-2/3">Nam eget dui vel quam sodales semper quis porttitor
                                tortor. Vivamus quis ex nulla ...Nam eget dui vel quam
                                sodales semper quis porttitor tortor.</p>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Useful Links</h5>
                        <ul className="space-y-2">
                            <li><Link to="/aboutus" className="hover:text-blue-500">Contact us</Link></li>
                            <li><Link to='/aboutus' href="#" className="hover:text-blue-500">Help & About us</Link></li>
                            <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
                            <li><Link to='/aboutus' href="#" className="hover:text-blue-500">About us</Link></li>
                            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
                        </ul>

                        <h5 className="text-lg font-bold mb-4 mt-5">Opening Hours</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500">Office Hours: 8AM - 11PM</a></li>
                            <li><a href="#" className="hover:text-blue-500">Office Hours: 8AM -11PM</a></li>
                            <li><a href="#" className="hover:text-blue-500">Sunday-Weekend Day</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Customer Service</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-500">Orders</a></li>
                            <li><a href="#" className="hover:text-blue-500">Product</a></li>
                            <li><a href="#" className="hover:text-blue-500">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-blue-500">Addresses</a></li>
                            <li><a href="#" className="hover:text-blue-500">Account details</a></li>
                            <li><a href="#" className="hover:text-blue-500">Shop</a></li>
                            <li><a href="#" className="hover:text-blue-500">Lost password</a></li>
                            <li><a href="#" className="hover:text-blue-500">Account</a></li>
                            <li><a href="#" className="hover:text-blue-500">Downloads</a></li>
                            <li><a href="#" className="hover:text-blue-500">Orders</a></li>
                            <li><a href="#" className="hover:text-blue-500">Logout</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Contact Info</h5>
                        <ul className="space-y-2">
                            <li>Ta-134/A, Gulshan Badda Link</li>
                            <li>(+880)155 69569 365</li>
                            <li>support@rstheme.com</li>
                            <li>Office Hours: 8AM - 11PM</li>
                            <li>Sunday - Weekend Day</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-end space-x-4 mt-8 pr-5">
                    <a href="#" className="text-gray-600 hover:text-blue-500"><FaFacebookF /></a>
                    <a href="#" className="text-gray-600 hover:text-blue-500"><FaTwitter /></a>
                    <a href="#" className="text-gray-600 hover:text-blue-500"><FaInstagram /></a>
                    <a href="#" className="text-gray-600 hover:text-blue-500"><FaYoutube /></a>
                </div>

                {/* Copyright and Links */}
                <div className="text-center mt-8 lg:flex justify-between items-center border-t-2">
                    <div>
                        <p className="text-gray-500">© Copyright 2022 Theme_pure. All Rights Reserved.</p>
                    </div>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="text-gray-500 hover:text-blue-500">Terms and conditions</a>
                        <a href="#" className="text-gray-500 hover:text-blue-500">Privacy policy</a>
                        <a href="#" className="text-gray-500 hover:text-blue-500">Pricing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
