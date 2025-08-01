"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {language === 'pt' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
