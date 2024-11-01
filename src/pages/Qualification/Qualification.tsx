import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Education from './Education';
import Experience from './Experience';

const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Education' | 'Experience'>('Education');

  return (
    <div id='skills' className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-2 dark:bg-slate-800 dark:text-white pb-16'>
      <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Qualification</h2>
      <span className='text-gray-500 text-sm md:text-lg text-center md:text-left dark:text-gray-300'>My Personal Journey</span>

      <div className='flex justify-center gap-6 mb-6 mt-10 text-xl'>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Education' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-300'}`}
          onClick={() => setActiveTab('Education')}
        >
          <FaGraduationCap />
          Education
        </button>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Experience' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-300'}`}
          onClick={() => setActiveTab('Experience')}
        >
          <FaBriefcase />
          Experience
        </button>
      </div>
      {
        activeTab === "Education" ? <Education /> : <Experience />
      }
    </div>
  );
}

export default Qualification;
