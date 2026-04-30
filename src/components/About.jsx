import React from 'react';
import Contact from "./Contact";
import pdfFile from './download/Natthakitt_Prapunwattana_CV.pdf';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import portraitImg from '../assets/IMG_0536.png';

const About = () => {
  return (
    <div id="about" className="relative">
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        {/* BIOMETRIC PROFILE SECTION */}
        <Section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary to-tertiary rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-surface-container-highest rounded-xl overflow-hidden aspect-square border border-outline-variant/20">
              <img
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src={portraitImg}
              />
              <div className="absolute bottom-4 left-4 font-headline text-xs tracking-widest bg-black/80 px-3 py-1 text-secondary uppercase">Status: Online</div>
              <div className="absolute top-4 right-4 text-primary opacity-50">
                <span className="material-symbols-outlined text-4xl">qr_code_2</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-label text-xs tracking-[0.4em] text-secondary uppercase mb-2 block">System Identification</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface uppercase leading-none">
                BIOMETRIC <br /><span className="text-primary">PROFILE</span>
              </h1>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light max-w-2xl">
              I am a passionate computer science student at HKU with interests in Medical AI, Computer Vision, Data Science, Fullstack development and ML workflow and AI agents. My work focuses on merging deep learning models with immersive digital environments to solve real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-panel px-6 py-4 rounded-xl border border-outline-variant/10 flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Architecture</span>
                <span className="text-on-surface font-headline font-bold">Deep Learning / CV</span>
              </div>
              <div className="glass-panel px-6 py-4 rounded-xl border border-outline-variant/10 flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Status</span>
                <span className="text-on-surface font-headline font-bold">Year 1 Student</span>
              </div>
              <div className="glass-panel px-6 py-4 rounded-xl border border-outline-variant/10 flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Language</span>
                <span className="text-on-surface font-headline font-bold">Python / C++ / JavaScript</span>
              </div>
            </div>
          </div>
        </Section>

        {/* TECH STACK BENTO GRID */}
        <Section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-2">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase">Core Competencies</span>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface uppercase">TECH STACK</h2>
            </div>
            <div className="h-[1px] flex-grow bg-outline-variant/20 mx-8 hidden md:block mb-3"></div>
            <div className="text-on-surface-variant font-headline text-sm tracking-tighter">VERS_2.0.44_STABLE</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Python Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2 glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-secondary/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-5xl text-secondary">terminal</span>
                <span className="text-xs text-secondary/40 font-mono tracking-tighter">01</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Python & C++</h3>
              <p className="text-on-surface-variant text-sm mb-6">Core languages for building robust AI systems and high-performance algorithms in research and production.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded bg-surface-container-low border border-outline-variant/20 text-[10px] text-on-surface-variant uppercase tracking-wider">Scientific Computing</span>
                <span className="px-3 py-1 rounded bg-surface-container-low border border-outline-variant/20 text-[10px] text-on-surface-variant uppercase tracking-wider">Data analysis</span>
                <span className="px-3 py-1 rounded bg-surface-container-low border border-outline-variant/20 text-[10px] text-on-surface-variant uppercase tracking-wider">Backend Development</span>
              </div>
            </motion.div>
            {/* AI/ML Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-primary/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-5xl text-primary">psychology</span>
                <span className="text-xs text-primary/40 font-mono tracking-tighter">02</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">TensorFlow / PyTorch</h3>
              <p className="text-on-surface-variant text-sm">Designing and training deep neural architectures to address real-world problems.</p>
            </motion.div>
            {/* Computer Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-tertiary/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-5xl text-tertiary">visibility</span>
                <span className="text-xs text-tertiary/40 font-mono tracking-tighter">03</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">OpenCV</h3>
              <p className="text-on-surface-variant text-sm">Advanced image processing and real-time vision algorithms.</p>
            </motion.div>
            {/* Medical AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-2 glass-panel p-8 rounded-xl border border-outline-variant/10 group hover:border-tertiary/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">medical_information</span>
              </div>
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-5xl text-tertiary">view_in_ar</span>
                <span className="text-xs text-tertiary/40 font-mono tracking-tighter">04</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">Medical AI</h3>
              <p className="text-on-surface-variant text-sm max-w-xs">Building AI applications in healthcare, from MRI tumor classification to motion capture gait analysis.</p>
            </motion.div>
            {/* Other Tech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-2 bg-surface-container-high/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between border-l-4 border-secondary/20 hover:bg-surface-bright transition-all duration-300 min-h-[250px] relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl neon-glow-secondary">terminal_2</span>
                <span className="text-on-surface-variant font-headline text-[10px] tracking-widest uppercase">Auxiliary_Nodes</span>
              </div>
              <div>
                <h3 className="font-headline text-3xl font-bold mb-4">Core Utilities</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-surface-container-low border border-outline-variant/20 px-4 py-2 rounded text-secondary font-headline text-xs tracking-wider uppercase">RUST</span>
                  <span className="bg-surface-container-low border border-outline-variant/20 px-4 py-2 rounded text-secondary font-headline text-xs tracking-wider uppercase">React.js</span>
                  <span className="bg-surface-container-low border border-outline-variant/20 px-4 py-2 rounded text-secondary font-headline text-xs tracking-wider uppercase">Git/GitHub</span>
                  <span className="bg-surface-container-low border border-outline-variant/20 px-4 py-2 rounded text-secondary font-headline text-xs tracking-wider uppercase">Docker</span>
                  <span className="bg-surface-container-low border border-outline-variant/20 px-4 py-2 rounded text-secondary font-headline text-xs tracking-wider uppercase">fastapi</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* CALL TO ACTION */}
        <Section className="glass-panel p-12 rounded-2xl border border-outline-variant/10 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
          <div className="space-y-4">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">Let's Work <span className="text-primary">Together</span></h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Download my full CV to see my technical background or reach out to start a conversation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={pdfFile} download="Natthakitt_Prapunwattana_CV.pdf" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-headline font-bold rounded-lg uppercase tracking-widest shadow-[0_0_20px_rgba(255,124,245,0.4)] hover:shadow-[0_0_30px_rgba(255,124,245,0.6)] transition-all">
              Download CV
            </a>
            <a className="px-10 py-4 border border-secondary text-secondary font-headline font-bold rounded-lg uppercase tracking-widest hover:bg-secondary/10 transition-all" href="#contact">
              Initialize Contact
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default About;

