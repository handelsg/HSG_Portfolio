"use client";

import React from 'react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const { t } = useLanguage();
  
  const experiences: Experience[] = [
    {
      id: 'banese-dev',
      company: 'Banese',
      position: 'Desenvolvedor Front-end',
      period: 'Jul 2024 - Presente',
      description: [
        'Desenvolvimento de aplicações web de alta performance utilizando React e Next.js',
        'Atuação em ambiente ágil com metodologias Scrum',
        'Tomada de decisões sobre arquitetura de software para soluções escaláveis',
        'Tradução de conceitos financeiros complexos do Open Finance em interfaces intuitivas',
        'Colaboração com stakeholders para alinhar desenvolvimento às prioridades da empresa'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Scrum']
    },
    {
      id: 'banese-ai',
      company: 'BaneseLABES',
      position: 'Pesquisador e Desenvolvedor em IA',
      period: 'Jan 2024 - Jul 2024',
      description: [
        'Estudo aprofundado em redes neurais e modelos de linguagem',
        'Aplicação prática de IA generativa em projeto inovador',
        'Desenvolvimento de interfaces dinâmicas com React para integração com IA',
        'Consolidação de conhecimento em tecnologias emergentes'
      ],
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'React', 'Neural Networks']
    },
    {
      id: 'ssp-se',
      company: 'Secretaria de Segurança Pública - SE',
      position: 'Desenvolvedor Full Stack',
      period: 'Jan 2023 - Dez 2023',
      description: [
        'Desenvolvimento e manutenção de sistemas utilizando .NET, C# e Angular',
        'Criação de sistemas integrados para otimizar processos críticos da gestão pública',
        'Implementação de novas funcionalidades e otimização de performance',
        'Trabalho colaborativo com equipes multidisciplinares'
      ],
      technologies: ['C#', '.NET', 'Angular', 'SQL Server', 'JavaScript']
    }
  ];

  return (
    <Section id="experiencia" title={t('experience.title')} className="bg-gray-50 dark:bg-gray-800">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <AnimatedSection key={exp.id} direction="up" delay={0.2 * index}>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-semibold text-green-500 dark:text-green-400">
                    {exp.company}
                  </h4>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300">
                {exp.description.map((item) => (
                  <li key={item.substring(0, 20)} className="leading-relaxed">{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      
      {/* Seção de Educação */}
      <AnimatedSection direction="up" delay={0.8} className="mt-12">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">{t('experience.education')}</h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">{t('experience.graduation')}</h4>
              <p className="text-lg opacity-90">Universidade Tiradentes (Unit)</p>
              <p className="opacity-80">Jan 2021 - Jun 2025</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">{t('experience.certifications')}</h4>
              <ul className="space-y-1 opacity-90">
                <li>🏆 NASA Space Apps Challenge - Global (2024)</li>
                <li>🥇 NASA Space Apps Challenge - Vencedor Local (2023)</li>
                <li>☁️ Google Cloud Skills Boost</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
};

export default Experience;
