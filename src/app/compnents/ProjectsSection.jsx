import React from 'react'
import { ProjectCard } from './ProjectCard'
import Image from 'next/image';
import ReactPlayer from 'react-player';

const projectsData = [
    {
        id: 1,
        title: "Accademia degli Arcani Perduti",
        description: "Avventura testuale",
        image: "/images/projects/projects1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/M4RV1L/L-Accademia-Degli-Arcani-Preduti",
        previewUrl: "/",

    },
    {
        id: 2,
        title: "My personal site",
        description: "Avventura testuale",
        image: "/images/projects/projects2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/M4RV1L/Personal-Site",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Accademia degli Arcani Perduti Web",
        description: "Avventura testuale",
        image: "/images/projects/projects3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/M4RV1L/L-Accademia-Degli-Arcani-Perduti-Web",
        previewUrl: "/",

    },
];

const ProjectsSection = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>
            My Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-6'>
            {projectsData.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                 />
            ))}
        </div>
    </>
  );
};

export default ProjectsSection
