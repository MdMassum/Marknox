import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

interface Project {
  image: string;
  git: string;
  live: string;
  name: string;
  description: string;
}

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg w-[349px] m-3'>
      <div>
        <img
          src={project.image}
          alt={project.name}
          className='h-[190px] md:h-[230px] w-full object-cover hover:scale-105 transition-transform duration-300 border-b border-black'
        />
        <div className="p-4 flex flex-col">
          <p className='font-semibold text-slate-800 text-lg truncate mb-3'>{project.name}</p>
          <p className='text-gray-600 text-sm line-clamp-2 mb-4'>{project.description}</p>

          <div className="flex justify-between">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"  // Add rel attribute for security
              className="flex justify-center items-center gap-1 text-black font-bold text-sm hover:underline">
              Live Demo <FaArrowRight />
            </a>
            <a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"  // Add rel attribute for security
              className="flex justify-center items-center gap-1 text-black font-bold text-sm hover:underline">
              GitHub <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
