import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="relative">
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
          {/* Left Column: Intent & Socials */}
          <Section className="lg:col-span-12 flex flex-col items-center justify-center space-y-12 text-center">
            <header>
              <span className="text-secondary font-headline tracking-[0.3em] uppercase text-xs mb-4 block">Communication Protocol</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none mb-6 text-on-surface uppercase">
                Get in <br /><span className="text-primary italic">Touch</span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mx-auto">
                I'm always open to discussing new projects, research opportunities, or technical collaborations.
              </p>
            </header>
            <div className="space-y-8 w-full">
              <div>
                <h3 className="text-xs font-headline tracking-widest uppercase text-outline mb-4 mx-auto">Direct Data Streams</h3>
                <div className="space-y-4 max-w-md mx-auto w-full text-left">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-surface-container-low/80 backdrop-blur-sm hover:bg-surface-container-high transition-all border border-transparent hover:border-secondary/20" href="#"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Email</p>
                      <p className="text-on-surface font-headline">mingnatthakitt@gmail.com</p>
                    </div>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-surface-container-low/80 backdrop-blur-sm hover:bg-surface-container-high transition-all border border-transparent hover:border-primary/20" href="#"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">hub</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">GitHub</p>
                      <p className="text-on-surface font-headline">@mingnatthakitt</p>
                    </div>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-surface-container-low/80 backdrop-blur-sm hover:bg-surface-container-high transition-all border border-transparent hover:border-tertiary/20" href="#"
                  >
                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined">lan</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">LinkedIn</p>
                      <p className="text-on-surface font-headline">in/natthakitt-prapunwattana</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </Section>
      </main>
    </div>
  );
};

export default Contact;
