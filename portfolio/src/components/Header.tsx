"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-gray-200 dark:border-gray-700 shadow-lg' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50'
      }`}
    >
      <nav className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800 dark:text-white transition-all duration-300 font-mono">
            <span className="text-green-500">&lt;Dev&gt;</span>
            <span className="ml-1">Handel</span>
            <span className="text-green-500 ml-1">&lt;/Dev&gt;</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {[
                { key: 'inicio', label: 'Início' },
                { key: 'sobre', label: t('nav.about') },
                { key: 'skills', label: t('nav.skills') },
                { key: 'experiencia', label: t('nav.experience') },
                { key: 'projetos', label: t('nav.projects') },
                { key: 'contato', label: t('nav.contact') }
              ].map((item) => (
                <a 
                  key={item.key}
                  href={`#${item.key}`} 
                  className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors capitalize relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <LanguageToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {[
                { key: 'inicio', label: 'Início' },
                { key: 'sobre', label: t('nav.about') },
                { key: 'skills', label: t('nav.skills') },
                { key: 'experiencia', label: t('nav.experience') },
                { key: 'projetos', label: t('nav.projects') },
                { key: 'contato', label: t('nav.contact') }
              ].map((item) => (
                <a 
                  key={item.key}
                  href={`#${item.key}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors capitalize py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
