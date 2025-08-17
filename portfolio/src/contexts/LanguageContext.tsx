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
      'skills.frontend': 'Frontend Development',
      'skills.backend': 'Backend Development',
      'skills.database': 'Database & Cloud',
      'skills.ai': 'AI & Emerging Tech',
      'skills.tools': 'Tools & Others',
      'skills.overview': 'Visão Geral das Habilidades',
      'skills.languages': 'Linguagens de Programação',
      'skills.frameworks': 'Frameworks & Bibliotecas',
      'skills.technologies': 'Tecnologias Dominadas',
      'skills.experience': 'Anos de Experiência',
      'skills.proficiency': 'Proficiência',
      
      // Experience
      'experience.title': 'Experiência Profissional',
      'experience.education': 'Formação & Certificações',
      'experience.educationDesc': 'Formação acadêmica sólida e certificações relevantes',
      'experience.graduation': 'Graduação em Sistemas de Informação',
      'experience.certifications': 'Certificações Microsoft e AWS',
      'experience.courses': 'Cursos especializados em desenvolvimento',
      
      // Experience Details
      'experience.banese.position': 'Desenvolvedor Front-end',
      'experience.banese.period': 'Jul 2024 - Presente',
      'experience.banese.desc1': 'Desenvolvimento de aplicações web de alta performance utilizando React e Next.js',
      'experience.banese.desc2': 'Atuação em ambiente ágil com metodologias Scrum',
      'experience.banese.desc3': 'Tomada de decisões sobre arquitetura de software para soluções escaláveis',
      'experience.banese.desc4': 'Tradução de conceitos financeiros complexos do Open Finance em interfaces intuitivas',
      'experience.banese.desc5': 'Colaboração com stakeholders para alinhar desenvolvimento às prioridades da empresa',
      
      'experience.baneselabes.position': 'Pesquisador e Desenvolvedor em IA',
      'experience.baneselabes.period': 'Jan 2024 - Jul 2024',
      'experience.baneselabes.desc1': 'Estudo aprofundado em redes neurais e modelos de linguagem',
      'experience.baneselabes.desc2': 'Aplicação prática de IA generativa em projeto inovador',
      'experience.baneselabes.desc3': 'Desenvolvimento de interfaces dinâmicas com React para integração com IA',
      'experience.baneselabes.desc4': 'Consolidação de conhecimento em tecnologias emergentes',
      
      'experience.ssp.position': 'Desenvolvedor Full Stack',
      'experience.ssp.period': 'Jan 2023 - Dez 2023',
      'experience.ssp.desc1': 'Desenvolvimento e manutenção de sistemas utilizando .NET, C# e Angular',
      'experience.ssp.desc2': 'Criação de sistemas integrados para otimizar processos críticos da gestão pública',
      'experience.ssp.desc3': 'Implementação de novas funcionalidades e otimização de performance',
      'experience.ssp.desc4': 'Trabalho colaborativo com equipes multidisciplinares',
      
      // Projects
      'projects.title': 'Projetos em Destaque',
      'projects.subtitle': 'Alguns dos meus trabalhos mais recentes',
      'projects.viewCode': 'Ver Código',
      'projects.liveDemo': 'Demo',
      
      // TCC Project
      'projects.tcc.title': 'Sistema de Geração de Artefatos Ágeis com IA Generativa',
      'projects.tcc.description': 'Sistema desenvolvido como TCC que utiliza IA Generativa para automatizar a criação de artefatos ágeis como resumos de reuniões, geração de user stories e criação de tasks a partir de discussões.',
      
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
      'skills.frontend': 'Frontend Development',
      'skills.backend': 'Backend Development',
      'skills.database': 'Database & Cloud',
      'skills.ai': 'AI & Emerging Tech',
      'skills.tools': 'Tools & Others',
      'skills.overview': 'Skills Overview',
      'skills.languages': 'Programming Languages',
      'skills.frameworks': 'Frameworks & Libraries',
      'skills.technologies': 'Technologies Mastered',
      'skills.experience': 'Years of Experience',
      'skills.proficiency': 'Proficiency',
      
      // Experience
      'experience.title': 'Professional Experience',
      'experience.education': 'Education & Certifications',
      'experience.educationDesc': 'Solid academic background and relevant certifications',
      'experience.graduation': 'Bachelor\'s Degree in Computer Science - Universidade Tiradentes (Unit)',
      'experience.certifications': 'Google Cloud Skills Boost Certifications',
      'experience.courses': 'NASA Space Apps Challenge 2022 & 2023 - Winner of Regional Challenge',
      
      // Experience Details
      'experience.banese.position': 'Front-end Developer',
      'experience.banese.period': 'Jul 2024 - Present',
      'experience.banese.desc1': 'Development of high-performance web applications using React and Next.js',
      'experience.banese.desc2': 'Working in agile environments with Scrum methodologies',
      'experience.banese.desc3': 'Making architectural decisions for scalable software solutions',
      'experience.banese.desc4': 'Translating complex Open Finance financial concepts into intuitive interfaces',
      'experience.banese.desc5': 'Collaborating with stakeholders to align development with company priorities',
      
      'experience.baneselabes.position': 'AI Researcher and Developer',
      'experience.baneselabes.period': 'Jan 2024 - Jul 2024',
      'experience.baneselabes.desc1': 'In-depth study of neural networks and language models',
      'experience.baneselabes.desc2': 'Practical application of generative AI in innovative projects',
      'experience.baneselabes.desc3': 'Development of dynamic interfaces with React for AI integration',
      'experience.baneselabes.desc4': 'Consolidation of knowledge in emerging technologies',
      
      'experience.ssp.position': 'Full Stack Developer',
      'experience.ssp.period': 'Jan 2023 - Dec 2023',
      'experience.ssp.desc1': 'Development and maintenance of systems using .NET, C# and Angular',
      'experience.ssp.desc2': 'Creation of integrated systems to optimize critical public management processes',
      'experience.ssp.desc3': 'Implementation of new features and performance optimization',
      'experience.ssp.desc4': 'Collaborative work with multidisciplinary teams',
      
      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some of my recent work',
      'projects.viewCode': 'View Code',
      'projects.liveDemo': 'Live Demo',
      
      // TCC Project
      'projects.tcc.title': 'Agile Artifacts Generation System with Generative AI',
      'projects.tcc.description': 'System developed as a final thesis project that uses Generative AI to automate the creation of agile artifacts such as meeting summaries, user story generation, and task creation from discussions.',
      
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
