"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 p-1">
                {!imageError ? (
                  <Image 
                    src="/profile-photo.jpeg" 
                    alt="Handel Santana - Desenvolvedor Full Stack"
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover bg-white"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-4xl font-bold">
                    HS
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              {t('hero.greeting')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Handel Santana
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.6}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projetos"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors transform hover:scale-105 duration-200"
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors transform hover:scale-105 duration-200"
              >
                {t('hero.contact')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
