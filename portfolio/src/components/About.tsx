"use client";

import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Section id="sobre" title={t('about.title')} className="bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left" delay={0.2}>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">C#, .NET, Python, Node.js, SQL</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" delay={0.4}>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-8 text-white hover-lift">
            <h4 className="text-xl font-semibold mb-4">{t('about.stats')}</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>{t('about.years')}</span>
                  <span className="font-semibold">2+</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[75%] animate-progress"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>{t('about.projects')}</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[85%] animate-progress" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>{t('about.technologies')}</span>
                  <span className="font-semibold">20+</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[90%] animate-progress" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default About;
