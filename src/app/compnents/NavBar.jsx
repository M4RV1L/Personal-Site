"use client";
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import GithubIcon from "../../../public/github-mark-white.svg";
import LinkedinIcon from "../../../public/linkedin-svgrepo-com.svg";
import InstagramIcon from "../../../public/instagram-svgrepo-com.svg";
import TryHackMeIcon from "../../../public/THM-icon.svg";

const navLinks = [
    {
        title: <Image src={GithubIcon} alt='GitHub Icon' width={30} height={30} />,
        path: "https://github.com/M4RV1L",
    },
    {
        title: <Image src={LinkedinIcon} alt='Linkedin Icon' width={30} height={30} />,
        path: "https://www.linkedin.com/in/marcovillano/",
    },
    {
        title: <Image src={InstagramIcon} alt='Instagram Icon' width={30} height={30} />,
        path: "https://www.instagram.com/_marcovillano_",
    },
    {
        title: <Image src={TryHackMeIcon} alt='TryHackMe Icon' width={30} height={30} />,
        path: "https://tryhackme.com/p/M4RV1L",
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-black opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                M4RV1L
            </Link>
            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar
