"use client";

import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const skills: Skill[] = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'TypeScript', level: 80, icon: '📘' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'C#', level: 85, icon: '🔷' },
    { name: '.NET', level: 80, icon: '�' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Node.js', level: 70, icon: '🟢' },
    { name: 'SQL', level: 80, icon: '�️' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'Git', level: 90, icon: '📚' },
    { name: 'TailwindCSS', level: 90, icon: '🎨' },
    { name: 'Angular', level: 75, icon: '�️' },
    { name: 'Redis', level: 65, icon: '�' },
    { name: 'UI/UX Design', level: 80, icon: '🎨' },
    { name: 'PWA', level: 75, icon: '📱' },
  ];

  return (
    <Section id="skills" title={t('skills.title')} className="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <AnimatedSection 
            key={skill.name} 
            direction="up" 
            delay={0.1 * index}
            className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>Proficiência</span>
                <span>{skill.level}%</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${0.5 + 0.1 * index}s`
                }}
              ></div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
