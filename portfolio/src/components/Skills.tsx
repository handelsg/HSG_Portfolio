"use client";

import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const skillCategories: SkillCategory[] = [
    {
      category: t('skills.frontend'),
      skills: [
        { 
          name: 'React', 
          icon: <i className="devicon-react-original text-3xl"></i>, 
          color: 'from-blue-500 to-cyan-500' 
        },
        { 
          name: 'Next.js', 
          icon: <i className="devicon-nextjs-plain text-3xl"></i>, 
          color: 'from-gray-800 to-gray-600' 
        },
        { 
          name: 'TypeScript', 
          icon: <i className="devicon-typescript-original text-3xl"></i>, 
          color: 'from-blue-600 to-blue-700' 
        },
        { 
          name: 'JavaScript', 
          icon: <i className="devicon-javascript-plain text-3xl"></i>, 
          color: 'from-yellow-500 to-orange-500' 
        },
        { 
          name: 'TailwindCSS', 
          icon: <i className="devicon-tailwindcss-original text-3xl"></i>, 
          color: 'from-teal-400 to-blue-500' 
        },
        { 
          name: 'Angular', 
          icon: <i className="devicon-angular-plain text-3xl text-white"></i>, 
          color: 'from-red-600 to-red-700' 
        },
      ]
    },
    {
      category: t('skills.backend'),
      skills: [
        { 
          name: 'C#', 
          icon: <i className="devicon-csharp-plain text-3xl text-white"></i>, 
          color: 'from-purple-600 to-purple-700' 
        },
        { 
          name: '.NET', 
          icon: <i className="devicon-dot-net-plain text-3xl text-white"></i>, 
          color: 'from-indigo-600 to-purple-600' 
        },
        { 
          name: 'Python', 
          icon: <i className="devicon-python-plain text-3xl text-white"></i>, 
          color: 'from-green-600 to-blue-600' 
        },
        { 
          name: 'Node.js', 
          icon: <i className="devicon-nodejs-plain text-3xl text-white"></i>, 
          color: 'from-green-500 to-green-600' 
        },
        { 
          name: 'FastAPI', 
          icon: <i className="devicon-fastapi-plain text-3xl text-white"></i>, 
          color: 'from-teal-500 to-green-500' 
        },
      ]
    },
    {
      category: t('skills.database'),
      skills: [
        { 
          name: 'SQL Server', 
          icon: <i className="devicon-microsoftsqlserver-plain text-3xl text-white"></i>, 
          color: 'from-red-500 to-orange-500' 
        },
        { 
          name: 'MongoDB', 
          icon: <i className="devicon-mongodb-plain text-3xl text-white"></i>, 
          color: 'from-green-500 to-green-600' 
        },
        { 
          name: 'Redis', 
          icon: <i className="devicon-redis-plain text-3xl text-white"></i>, 
          color: 'from-red-500 to-red-600' 
        },
        { 
          name: 'Docker', 
          icon: <i className="devicon-docker-plain text-3xl text-white"></i>, 
          color: 'from-blue-500 to-blue-600' 
        },
      ]
    },
    {
      category: t('skills.tools'),
      skills: [
        { 
          name: 'Git', 
          icon: <i className="devicon-git-plain text-3xl text-white"></i>, 
          color: 'from-orange-500 to-red-500' 
        },
        { 
          name: 'UI/UX Design', 
          icon: <i className="devicon-figma-plain text-3xl text-white"></i>, 
          color: 'from-pink-500 to-purple-500' 
        },
        { 
          name: 'PWA', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ), 
          color: 'from-indigo-500 to-purple-500' 
        },
        { 
          name: 'Scrum', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          ), 
          color: 'from-green-500 to-teal-500' 
        },
      ]
    }
  ];

  return (
    <Section id="skills" title={t('skills.title')} className="bg-gray-50 dark:bg-gray-800">
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedSection 
            key={category.category} 
            direction="up" 
            delay={0.2 * categoryIndex}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                    style={{ animationDelay: `${0.1 * skillIndex}s` }}
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mr-4`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      
      {/* Statistics Section */}
      <AnimatedSection direction="up" delay={1.0} className="mt-16">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">{t('skills.overview')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">{t('skills.languages')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">{t('skills.frameworks')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">{t('skills.technologies')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-lg opacity-90">{t('skills.experience')}</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
};

export default Skills;