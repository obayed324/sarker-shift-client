import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = ['Services', 'Coverage', 'About Us', 'Pricing', 'Blog', 'Contact'];

const Footer = () => {
    return (
        <footer className="bg-[#111111] rounded-3xl mx-4 my-6 px-8 py-14 text-white text-center">

            <div className="flex justify-center mb-4">
                <Logo />
            </div>

            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
                business shipments — we deliver on time, every time.
            </p>

            <div className="border-t border-dashed border-gray-600 mb-8" />

            <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
                {navLinks.map((link) => (
                    <a key={link} href="#" className="text-gray-300 text-sm hover:text-white transition">
                        {link}
                    </a>
                ))}
            </nav>

            <div className="border-t border-dashed border-gray-600 mb-8" />

            <div className="flex items-center justify-center gap-4">
                <a href="#" className="w-11 h-11 rounded-full bg-[#0077B5] flex items-center justify-center hover:opacity-90 transition">
                    <FaLinkedinIn className="text-white text-base" />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition">
                    <FaXTwitter className="text-black text-base" />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition">
                    <FaFacebookF className="text-white text-base" />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-90 transition">
                    <FaYoutube className="text-white text-base" />
                </a>
            </div>

        </footer>
    );
};

export default Footer;