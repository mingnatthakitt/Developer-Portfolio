import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const Experiences = () => {
  return (
    <div id="experiences" className="relative" >
      <main className="relative pt-24 pb-20 max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <Section className="mb-20 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase neon-glow-secondary">Career_Trajectory</span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">Working <span className="text-primary italic">Experiences</span></h1>
          </div>
          <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed mx-auto">
            Deploying high-performance machine learning models across many fields. Specializing in Computer Vision and Data Science.
          </p>
        </Section>

        {/* Experience Timeline */}
        <div className="space-y-12">
          <Section className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
            <h2 className="font-headline text-sm tracking-[0.4em] uppercase text-on-surface-variant">Log_Entries</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
          </Section>

          {/* Role 1 */}
          <Section className="relative pl-12 md:pl-0">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-outline-variant/20"></div>
            <div className="md:grid md:grid-cols-2 gap-16 items-start">
              <div className="md:text-right flex flex-col gap-2">
                <span className="text-secondary font-headline font-bold text-xl neon-glow-secondary">0x01. Student Research Assistant</span>
                <span className="text-on-surface-variant font-headline text-xs tracking-widest uppercase">Tam Wing Fan Innovation Wing, HKU // Present</span>
              </div>
              <div className="mt-4 md:mt-0 bg-surface-container-low/80 backdrop-blur-sm p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all">
                <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                    <span>Designing motion capture pipeline to analyze gait patterns for detection of motor disorders.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                    <span>Utilizing motion capture to increase efficiency in diagnosing movement associated diseases.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                    <span>Part of the Motion Capture Team - Spatial Intelligence Group.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Role 2 */}
          <Section className="relative pl-12 md:pl-0">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-outline-variant/20"></div>
            <div className="md:grid md:grid-cols-2 gap-16 items-start">
              <div className="order-2 md:text-left flex flex-col gap-2">
                <span className="text-primary font-headline font-bold text-xl neon-glow-primary">0x02. Student Research Assistant</span>
                <span className="text-on-surface-variant font-headline text-xs tracking-widest uppercase">DoEM Research Team - HKUMed // Present</span>
              </div>
              <div className="order-1 mt-4 md:mt-0 bg-surface-container-low/80 backdrop-blur-sm p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all">
                <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                    <span>Exploring AI integrations with big data health records under Dr. Abraham K C Wai.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                    <span>Analyzing reported non-fatal self-harm cases in Hong Kong (age 18 to 25).</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                    <span>Contributing to the Population Emergency Medicine Research Group.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default Experiences;
