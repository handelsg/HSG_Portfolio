"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('en');

  const translations = {
    pt: {
      // Navigation
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      
      // Hero
      'hero.greeting': 'Olá, eu sou',
      'hero.description': 'Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e interfaces elegantes.',
      'hero.viewProjects': 'Ver Projetos',
      'hero.contact': 'Entre em Contato',
      
      // About
      'about.title': 'Sobre Mim',
      'about.subtitle': 'Desenvolvedor Full Stack com paixão por tecnologia',
      'about.description': 'Sou um desenvolvedor full stack apaixonado por tecnologia, com mais de 2 anos de experiência criando soluções inovadoras. Especializado em C#, .NET, React e desenvolvimento de APIs robustas. Tenho experiência em projetos do setor bancário e governamental, sempre focando em código limpo, performance e experiência do usuário.',
      'about.stats': 'Estatísticas',
      'about.years': 'Anos de Experiência',
      'about.projects': 'Projetos Desenvolvidos',
      'about.technologies': 'Tecnologias Dominadas',
      
      // Skills
      'skills.title': 'Habilidades Técnicas',
      'skills.subtitle': 'Tecnologias que domino',
      
      // Experience
      'experience.title': 'Experiência Profissional',
      'experience.education': 'Formação & Certificações',
      'experience.educationDesc': 'Formação acadêmica sólida e certificações relevantes',
      'experience.graduation': 'Graduação em Sistemas de Informação',
      'experience.certifications': 'Certificações Microsoft e AWS',
      'experience.courses': 'Cursos especializados em desenvolvimento',
      
      // Projects
      'projects.title': 'Projetos em Destaque',
      'projects.subtitle': 'Alguns dos meus trabalhos mais recentes',
      'projects.viewCode': 'Ver Código',
      'projects.liveDemo': 'Demo',
      
      // Contact
      'contact.title': 'Contato',
      'contact.subtitle': 'Vamos conversar sobre seu próximo projeto',
      'contact.description': 'Estou sempre aberto a novas oportunidades e projetos desafiadores. Vamos conversar sobre como posso contribuir para seu próximo projeto!',
      'contact.info': 'Informações de Contato',
      'contact.email': 'Email',
      'contact.location': 'Localização',
      'contact.form.title': 'Envie uma Mensagem',
      'contact.form.name': 'Nome',
      'contact.form.email': 'Email',
      'contact.form.message': 'Mensagem',
      'contact.form.send': 'Enviar Mensagem',
      'contact.form.namePlaceholder': 'Seu nome',
      'contact.form.emailPlaceholder': 'seu@email.com',
      'contact.form.messagePlaceholder': 'Sua mensagem...',
      
      // Footer
      'footer.madeWith': 'Feito com',
      'footer.by': 'por',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      
      // Hero
      'hero.greeting': 'Hello, I am',
      'hero.description': 'I am a dynamic and results-driven Fullstack Developer from Brazil, with focus on front-end development. I am seeking a challenging role where I can apply my expertise in designing, building, and implementing innovative software solutions.',
      'hero.viewProjects': 'View Projects',
      'hero.contact': 'Get in Touch',
      
      // About
      'about.title': 'About Me',
      'about.subtitle': 'Fullstack Developer with focus on front-end',
      'about.description': 'I have a proven track record of delivering high-quality, scalable applications and collaborating effectively with cross-functional teams using agile methodologies. Skilled in modern programming languages, frameworks, and tools, I am dedicated to optimizing system performance, enhancing user experiences, and staying ahead in the ever-evolving tech landscape.',
      'about.stats': 'Statistics',
      'about.years': 'Years of Experience',
      'about.projects': 'Projects Developed',
      'about.technologies': 'Technologies Mastered',
      
      // Skills
      'skills.title': 'Technical Skills',
      'skills.subtitle': 'Technologies I master',
      
      // Experience
      'experience.title': 'Professional Experience',
      'experience.education': 'Education & Certifications',
      'experience.educationDesc': 'Solid academic background and relevant certifications',
      'experience.graduation': 'Bachelor\'s Degree in Computer Science - Universidade Tiradentes (Unit)',
      'experience.certifications': 'Google Cloud Skills Boost Certifications',
      'experience.courses': 'NASA Space Apps Challenge 2022 & 2023 - Winner of Regional Challenge',
      
      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of my recent work',
      'projects.viewCode': 'View Code',
      'projects.liveDemo': 'Live Demo',
      
      // Contact
      'contact.title': 'Contact',
      'contact.subtitle': 'Let\'s talk about your next project',
      'contact.description': 'I am always open to new opportunities and challenging projects. Let\'s discuss how I can contribute to your next project!',
      'contact.info': 'Contact Information',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.form.title': 'Send a Message',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send Message',
      'contact.form.namePlaceholder': 'Your name',
      'contact.form.emailPlaceholder': 'your@email.com',
      'contact.form.messagePlaceholder': 'Your message...',
      
      // Footer
      'footer.madeWith': 'Made with',
      'footer.by': 'by',
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
