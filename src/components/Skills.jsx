import React from 'react';
import SkillCard from './SkillCard';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { skill: 'HTML', level: 'Advanced', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { skill: 'CSS', level: 'Advanced', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { skill: 'JavaScript', level: 'Advanced', icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { skill: 'Tailwind CSS', level: 'Advanced', icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
  { skill: 'Vue.js', level: 'Intermediate', icon: <FaVuejs className="text-green-500 text-4xl" /> },
  { skill: 'React.js', level: 'Advanced', icon: <FaReact className="text-blue-400 text-4xl" /> },
  { skill: 'Node.js', level: 'Intermediate', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill.skill} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
