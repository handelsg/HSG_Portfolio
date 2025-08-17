"use client";

import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  level: number;
  icon: string;
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
        { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 85, icon: '▲', color: 'from-gray-800 to-gray-600' },
        { name: 'TypeScript', level: 85, icon: '📘', color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 95, icon: '🟨', color: 'from-yellow-500 to-orange-500' },
        { name: 'TailwindCSS', level: 90, icon: '🎨', color: 'from-teal-400 to-blue-500' },
        { name: 'Angular', level: 75, icon: '🅰️', color: 'from-red-600 to-red-700' },
      ]
    },
    {
      category: t('skills.backend'),
      skills: [
        { name: 'C#', level: 85, icon: '🔷', color: 'from-purple-600 to-purple-700' },
        { name: '.NET', level: 80, icon: '🟣', color: 'from-indigo-600 to-purple-600' },
        { name: 'Python', level: 75, icon: '🐍', color: 'from-green-600 to-blue-600' },
        { name: 'Node.js', level: 70, icon: '🟢', color: 'from-green-500 to-green-600' },
        { name: 'FastAPI', level: 75, icon: '⚡', color: 'from-teal-500 to-green-500' },
      ]
    },
    {
      category: t('skills.database'),
      skills: [
        { name: 'SQL Server', level: 80, icon: '🗄️', color: 'from-red-500 to-orange-500' },
        { name: 'MongoDB', level: 75, icon: '🍃', color: 'from-green-500 to-green-600' },
        { name: 'Redis', level: 65, icon: '🔴', color: 'from-red-500 to-red-600' },
        { name: 'Docker', level: 70, icon: '🐳', color: 'from-blue-500 to-blue-600' },
      ]
    },
    {
      category: t('skills.ai'),
      skills: [
        { name: 'AI/ML', level: 75, icon: '🧠', color: 'from-purple-500 to-pink-500' },
        { name: 'TensorFlow', level: 70, icon: '🔥', color: 'from-orange-500 to-red-500' },
        { name: 'Neural Networks', level: 70, icon: '🕸️', color: 'from-purple-600 to-blue-600' },
        { name: 'Generative AI', level: 75, icon: '✨', color: 'from-pink-500 to-purple-500' },
      ]
    },
    {
      category: t('skills.tools'),
      skills: [
        { name: 'Git', level: 90, icon: '📚', color: 'from-orange-500 to-red-500' },
        { name: 'UI/UX Design', level: 80, icon: '🎨', color: 'from-pink-500 to-purple-500' },
        { name: 'PWA', level: 75, icon: '📱', color: 'from-indigo-500 to-purple-500' },
        { name: 'Scrum', level: 85, icon: '🔄', color: 'from-green-500 to-teal-500' },
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-3xl mr-3">{skill.icon}</span>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}% {t('skills.proficiency')}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${0.5 + 0.1 * skillIndex}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
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