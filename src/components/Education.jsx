import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import hkuImg from '../assets/hku.jpg';

const Education = () => {
  return (
    <div id="education" className="relative" align="right">
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <Section className="mb-24 relative">
          <div className="flex flex-col gap-2">
            <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase">Academic Journey</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-none">
              KNOWLEDGE <br />
              <span className="text-primary drop-shadow-[0_0_15px_#ff7cf5]">ACQUISITION.</span>
            </h1>
            <p className="max-w-xl mt-6 text-on-surface-variant text-lg leading-relaxed">
              A journey through academic and research, focused on<br /> bridging the gap between technology and real world issues.
            </p>
          </div>
        </Section>

        {/* Profile / Featured Image Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative overflow-hidden rounded-2xl group h-[400px]"
          >
            <img
              alt="Developer education profile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={hkuImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="flex gap-4">
                <div className="glass-panel px-4 py-2 border border-outline-variant/20 rounded-xl">
                  <span className="text-primary font-bold block">Hardcore Coder</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Status: Active</span>
                </div>
                <div className="glass-panel px-4 py-2 border border-outline-variant/20 rounded-xl">
                  <span className="text-secondary font-bold block">Sleep Deprived Student</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label">Working: 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface-container-high rounded-2xl p-8 flex flex-col justify-center gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="space-y-4">
              <span className="material-symbols-outlined text-secondary text-4xl">api</span>
              <h3 className="text-2xl font-headline font-bold">Research & Development Focus</h3>
              <p className="text-on-surface-variant text-sm">My current work revolves around machine learning, AI agents, IoT & embedded systems, data analysis and medical applications. </p>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-label tracking-widest uppercase">Specialization</span>
                <span className="text-primary font-bold uppercase tracking-tighter text-xs">Machine Learning</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <Section className="relative">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px w-12 bg-primary"></span>
            <h2 className="text-2xl font-headline font-bold uppercase tracking-widest text-[#f7eaf9]">Log_History</h2>
          </div>
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line (MD+) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-outline-variant to-transparent -translate-x-1/2"></div>
            <div className="space-y-16">
              {/* Education Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
              >
                <div className="w-full md:w-[45%]">
                  <div className="glass-panel p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group">
                    <span className="text-primary text-xs font-label font-bold tracking-widest mb-2 block uppercase">Present</span>
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-secondary text-sm font-medium mb-4">THE UNIVERSITY OF HONG KONG</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Focusing on AI-driven diagnostics and motion capture pipelines within the Tam Wing Fan Innovation Wing and HKUMed research teams.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] font-label text-on-surface-variant uppercase">Computer Science</span>
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] font-label text-on-surface-variant uppercase">AI Research</span>
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] font-label text-on-surface-variant uppercase">Medical Systems</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 shadow-[0_0_10px_#ff7cf5]"></div>
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
              {/* Education Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-0"
              >
                <div className="w-full md:w-[45%]">
                  <div className="glass-panel p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all duration-500 group">
                    <span className="text-secondary text-xs font-label font-bold tracking-widest mb-2 block uppercase">2022 — 2025</span>
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Science - Math Program</h3>
                    <p className="text-primary text-sm font-medium mb-4">TRIAM UDOM SUKSA SCHOOL</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Bangkok, Thailand. Developed strong foundations in analytical thinking and computational problem-solving.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] font-label text-on-surface-variant uppercase">Mathematics</span>
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] font-label text-on-surface-variant uppercase">Physics</span>
                      <span className="bg-surface-container-low border border-outline-variant/20 px-3 py-1 rounded-full text-[10px] font-label text-on-surface-variant uppercase">Applied Science</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-secondary -translate-x-1/2 z-10 shadow-[0_0_10px_#00e3fd]"></div>
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Credentials / Accolades Section */}
        <Section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-headline font-bold text-on-surface">CERTIFICATIONS_&TRAINING</h2>
              <p className="text-on-surface-variant mt-2 font-body">Verified technical certifications and verified skills.</p>
            </div>
            <div className="hidden md:block text-[10px] font-label tracking-[0.4em] uppercase opacity-40">Verification_Hash: 0x82...EF21</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-surface-container-high border-b-2 border-primary/20 p-6 rounded-xl hover:bg-surface-bright transition-colors"
            >
              <span className="material-symbols-outlined text-primary mb-4">verified</span>
              <h4 className="text-sm font-bold font-headline mb-1">Harvard CS50x</h4>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Harvard University</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface-container-high border-b-2 border-secondary/20 p-6 rounded-xl hover:bg-surface-bright transition-colors"
            >
              <span className="material-symbols-outlined text-secondary mb-4">psychology</span>
              <h4 className="text-sm font-bold font-headline mb-1">Machine Learning Specialization</h4>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Coursera & Stanford University</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-surface-container-high border-b-2 border-tertiary/20 p-6 rounded-xl hover:bg-surface-bright transition-colors"
            >
              <span className="material-symbols-outlined text-tertiary mb-4">neurology</span>
              <h4 className="text-sm font-bold font-headline mb-1">Deep Learning</h4>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">MIT OpenCourseWare</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-container-high border-b-2 border-primary-dim/20 p-6 rounded-xl hover:bg-surface-bright transition-colors"
            >
              <span className="material-symbols-outlined text-primary-dim mb-4">memory</span>
              <h4 className="text-sm font-bold font-headline mb-1">Super AI Engineer</h4>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">AIAT SS4</span>
            </motion.div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Education;
