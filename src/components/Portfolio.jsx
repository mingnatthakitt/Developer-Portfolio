import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import tumorVisionImg from '../assets/TumorVisionLOGO.svg';
import sinkingShipsImg from '../assets/sinkingships.png';
import thinkingTimesImg from '../assets/thinkingtimeswebsite.png';
import portfolioImg from '../assets/devportsite.png';

const Portfolio = () => {
  return (
    <div id="portfolio" className="relative">
      <main className="relative pt-24 pb-20 max-w-7xl mx-auto px-8">
        {/* Hero Header */}
        <Section className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-secondary"></span>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Project_Archive_v2.0</span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none text-on-surface mb-6">
            DIGITAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">PORTFOLIO</span>
          </h1>
          <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed">
            A curated selection of my recent projects including medical machine learning models, AI agents, 3D web applications, and games.
          </p>
        </Section>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1: Featured Large */}
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl neon-border-glow p-1"
          >
            <div className="relative h-full bg-surface-container-low rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={tumorVisionImg}
                  alt="Project preview"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-2 py-1">Featured_01</span>
                    <span className="material-symbols-outlined text-primary text-xl">terminal</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">TumorVision</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">AI-powered brain tumor diagnostic tool. Leverages an EfficientNetV2 deep learning architecture trained to recognize 44 distinct tumor signatures with real-time probability analysis.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-surface-container-highest/50 border border-outline-variant/20 px-3 py-1 text-[10px] font-label text-on-surface-variant rounded">PYTHON</span>
                    <span className="bg-surface-container-highest/50 border border-outline-variant/20 px-3 py-1 text-[10px] font-label text-on-surface-variant rounded">FASTAPI</span>
                    <span className="bg-surface-container-highest/50 border border-outline-variant/20 px-3 py-1 text-[10px] font-label text-on-surface-variant rounded">REACT</span>
                    <span className="bg-surface-container-highest/50 border border-outline-variant/20 px-3 py-1 text-[10px] font-label text-on-surface-variant rounded">DOCKER</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => window.open('https://github.com/mingnatthakitt/TumorVision', '_blank', 'noopener,noreferrer')} className="flex-1 py-3 px-4 bg-primary text-on-primary-fixed font-headline text-xs font-bold uppercase tracking-widest rounded hover:bg-primary-container transition-colors">VIEW REPO</button>
                  <button onClick={() => window.open('https://huggingface.co/spaces/mingnatthakitt/TumorVision', '_blank', 'noopener,noreferrer')} className="p-3 border border-outline rounded hover:border-secondary transition-colors group/btn">
                    <span className="material-symbols-outlined text-secondary group-hover:glow-sm">open_in_new</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Project 2: Small */}
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 group relative bg-surface-container-high rounded-xl neon-border-glow p-[1px]"
          >
            <div className="h-full bg-surface-container-low rounded-lg p-6 flex flex-col justify-between">
              <div>
                <div className="h-40 mb-6 rounded-lg overflow-hidden bg-surface-container-highest relative">
                  <img
                    className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-100"
                    src={sinkingShipsImg}
                    alt="Project preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Sinking Ships @ Strait</h3>
                <p className="text-on-surface-variant text-xs leading-relaxed mb-4">A tactical 1v1 strategy game designed for the terminal. Features polymorphic fleets, stealth mechanics, and procedural maps.</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                <span className="font-label text-[10px] text-tertiary">C++ // OOP // MAKEFILE</span>
                <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-colors" onClick={() => window.open('https://github.com/mingnatthakitt/SinkingShipsAtStrait', '_blank', 'noopener,noreferrer')}>gamepad_circle_down</span>
              </div>
            </div>
          </motion.article>

          {/* Project 3: Medium */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-6 group relative bg-surface-container-high rounded-xl neon-border-glow p-[1px]"
          >
            <div className="h-full bg-surface-container-low rounded-lg p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_#ff7cf5]"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_5px_#00e3fd]"></div>
                </div>
                <span className="font-label text-[10px] text-on-surface-variant tracking-widest uppercase">ACTIVE_DEPLOYS</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 uppercase tracking-tighter">The Thinking Times</h3>
              <p className="text-on-surface-variant text-sm mb-6">Automated daily news summarization by leveraging Gemini 3 Flash to summarize trending news in AI, Finance, and Global News then sending it to you via discord bot and display on an NYT-inspired interface.</p>
              <div className="grid grid-cols-3 gap-4 items-stretch">
                <div className="col-span-1 p-4 rounded bg-surface-container-highest/30 border border-outline-variant/10 text-center flex flex-col justify-center">
                  <span className="block text-secondary font-headline text-xl font-bold">20+</span>
                  <span className="text-[9px] font-label text-on-surface-variant uppercase">RSS Feeds</span>
                </div>
                <div className="col-span-1 p-4 rounded bg-surface-container-highest/30 border border-outline-variant/10 text-center flex flex-col justify-center">
                  <span className="block text-primary font-headline text-xl font-bold">Gemini 3</span>
                  <span className="text-[9px] font-label text-on-surface-variant uppercase">powered by</span>
                </div>
                <div className="col-span-1 p-2 rounded overflow-hidden bg-surface-container-highest/30 border border-outline-variant/10 flex items-center justify-center">
                  <img src={thinkingTimesImg} alt="Thinking Times Preview" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button onClick={() => window.open('https://github.com/mingnatthakitt/DailyNewsSummary', '_blank', 'noopener,noreferrer')} className="flex-1 py-3 px-4 bg-transparent border border-outline-variant text-on-surface-variant font-headline text-[10px] font-bold uppercase tracking-[0.2em] rounded hover:border-primary hover:text-primary transition-all">VIEW REPO</button>
                <button onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1499052107180015697&permissions=377957210112&integration_type=0&scope=bot', '_blank', 'noopener,noreferrer')} className="flex-1 py-3 px-4 bg-transparent border border-outline-variant text-on-surface-variant font-headline text-[10px] font-bold uppercase tracking-[0.2em] rounded hover:border-tertiary hover:text-tertiary transition-all flex items-center justify-center gap-2">
                  TRY THE BOT <span className="material-symbols-outlined text-sm">smart_toy</span>
                </button>
              </div>
            </div>
          </motion.article>

          {/* Project 4: Medium */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-6 group relative bg-surface-container-high rounded-xl neon-border-glow p-[1px]"
          >
            <div className="h-full bg-surface-container-low rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src={portfolioImg}
                  alt="Project preview"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 uppercase tracking-tighter">Developer Portfolio website</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Where code meets creativity. A fully interactive, 3D-driven portfolio made with the power of React, Three.js, and Framer Motion animations."</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-secondary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-on-secondary">JSX</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-tertiary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-on-tertiary">JS</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-on-primary">CSS</span>
                    </div>
                  </div>
                  <button onClick={() => window.open('https://github.com/mingnatthakitt/DevPortfolio', '_blank', 'noopener,noreferrer')} className="text-primary hover:text-on-surface font-headline text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
                    GITHUB REPO <span className="material-symbols-outlined text-sm">bolt</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
