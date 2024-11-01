import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type NavLink = {
    label: string;
    href: string;
};

type LogoLink = {
    href: string;
    item: JSX.Element;
};

const Footer: React.FC = () => {
    const nav: NavLink[] = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
    ];
    
    const logo: LogoLink[] = [
        {
            href: "https://www.instagram.com/m.massum_12/",
            item: <FaInstagram />
        },
        {
            href: "https://www.linkedin.com/in/md-emamudin-42576421b/",
            item: <FaLinkedin />
        },
        {
            href: "https://github.com/MdMassum",
            item: <FaGithub />
        },
        {
            href: "https://leetcode.com/u/mdemamudin726/",
            item: <SiLeetcode />
        },
    ];

    return (
        <footer className="flex flex-col justify-center items-center px-7 py-6 md:px-20 md:py-8 space-y-6 md:space-y-8 shadow-[0_1px_6px_rgba(0,0,0,0.2)] dark:bg-slate-900">
            
            <div>
                <h2 className="text-3xl font-bold text-gray-600 dark:text-white">M. Emamudin</h2>
            </div>

            {/* Navigation Links */}
            <nav>
                <ul className="flex gap-6">
                    {nav.map((navItem, idx) => (
                        <li key={idx}>
                            <a
                                href={navItem.href}
                                className="text-gray-500 hover:text-black transition duration-300 ease-in-out font-medium dark:text-gray-300 hover:dark:text-white"
                            >
                                {navItem.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Social Media Icons */}
            <div>
                <ul className="flex gap-6 text-2xl">
                    {logo.map((logoItem, idx) => (
                        <li key={idx}>
                            <a
                                href={logoItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition duration-300 ease-in-out dark:text-gray-300 hover:dark:text-white"
                            >
                                {logoItem.item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer Copyright */}
            <span className="text-gray-500 text-sm dark:text-white">© M. Emamudin. All Rights Reserved</span>
        </footer>
    );
}

export default Footer;
