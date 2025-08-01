"use client";

import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection direction="fade" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {title}
          </h2>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.3}>
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Section;
