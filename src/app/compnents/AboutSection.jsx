"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2 font-semibold'>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>Html, CSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2 font-semibold'>
                <li>IISS Ricciotto Canudo</li>
                <li>Computer Science at the Università degli Studi di Bari Aldo Moro</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2 font-semibold'>

            </ul>         
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2 font-semibold'>
                <li>Cisco Introduction to CyberSecurity</li>
                <li>Cisco IT ESSENSIAL</li>
                <li>Cisco Get Connected</li>
            </ul>
        ),
    },
    
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPendig, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.png" alt="image" width={500} height={500} />
            <div className='mt-4 md:.t-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg font-semibold'>
                    This is some information about me.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills</TabButton>
                    {""}
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education</TabButton>
                    {""} 
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience</TabButton>
                    {""}
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> Certifications</TabButton>
                </div>
                  <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection