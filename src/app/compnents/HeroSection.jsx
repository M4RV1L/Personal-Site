"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>Hello, I'm{""}</span>
                      <br></br>
                      <TypeAnimation
                          sequence={[
                              'Marco',
                              1000, 
                              'Computer Science student',
                              1000,
                              'Cybersecurity enthusiast',
                              1000,
                              'Novice CTF player',
                              1000
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                      />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        I’m Marco Villano and I’m a computer science student. In this website are collected some information about me and some projects I carry out.
                </p>
                <div>
                      <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        <a href="mailto:marco.villano04@gmail.com?body=My custom mail body">Contact Me</a>
                        </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'><Link href="https://github.com/M4RV1L">My GitHub</Link></span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-12 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                        src="/images/image.png"
                        alt='image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection