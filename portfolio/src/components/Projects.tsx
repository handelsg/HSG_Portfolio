"use client";

import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: 'projeto1',
      title: 'Sistema Open Finance - Banese',
      description: 'Aplicação web de alta performance para Open Finance desenvolvida com React e Next.js, traduzindo conceitos financeiros complexos em interfaces intuitivas e seguras.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
      githubUrl: 'https://github.com/handelsg/open-finance-app',
      liveUrl: 'https://banese-openfinance.com.br',
    },
    {
      id: 'projeto2',
      title: 'Sistema IA Generativa - BaneseLABES',
      description: 'Projeto inovador de inteligência artificial com redes neurais e modelos de linguagem, incluindo interfaces dinâmicas para integração com IA.',
      technologies: ['Python', 'TensorFlow', 'React', 'AI/ML', 'Neural Networks'],
      githubUrl: 'https://github.com/handelsg/ia-generativa',
    },
    {
      id: 'projeto3',
      title: 'Sistemas Integrados SSP-SE',
      description: 'Desenvolvimento e manutenção de sistemas críticos para a Secretaria de Segurança Pública usando .NET, C# e Angular para otimizar processos da gestão pública.',
      technologies: ['C#', '.NET', 'Angular', 'SQL Server', 'Azure'],
      githubUrl: 'https://github.com/handelsg/ssp-sistemas',
    },
    {
      id: 'projeto4',
      title: 'Dashboard Analytics',
      description: 'Dashboard responsivo para análise de dados com gráficos interativos e relatórios em tempo real, desenvolvido com tecnologias modernas.',
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB', 'TypeScript'],
      githubUrl: 'https://github.com/handelsg/dashboard-analytics',
      liveUrl: 'https://analytics-dashboard-hsg.vercel.app',
    },
    {
      id: 'projeto5',
      title: 'PWA E-commerce',
      description: 'Progressive Web App para e-commerce com funcionalidades offline, notificações push e interface otimizada para mobile.',
      technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'Stripe'],
      githubUrl: 'https://github.com/handelsg/pwa-ecommerce',
      liveUrl: 'https://pwa-ecommerce-hsg.vercel.app',
    },
    {
      id: 'projeto6',
      title: 'API RESTful .NET',
      description: 'API robusta desenvolvida em .NET com autenticação JWT, documentação Swagger e padrões de arquitetura limpa para escalabilidade.',
      technologies: ['C#', '.NET', 'Entity Framework', 'JWT', 'Swagger', 'Docker'],
      githubUrl: 'https://github.com/handelsg/dotnet-api',
    },
  ];

  return (
    <Section id="projetos" title={t('projects.title')} className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection 
            key={project.id} 
            direction="up" 
            delay={0.1 * index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">💻</div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-sm bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-105 duration-200"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    {t('projects.viewCode')}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors transform hover:scale-105 duration-200"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('projects.liveDemo')}
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
