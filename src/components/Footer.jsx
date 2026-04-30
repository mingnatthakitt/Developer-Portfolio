import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-[#4d4551]/20 bg-[#000000]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-4"
      >
        <div className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b2a7b6]">© 2024 Natthakitt Prapunwattana. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b2a7b6] hover:text-primary hover:drop-shadow-[0_0_5px_#00e3fd] transition-all opacity-80 hover:opacity-100" href="https://github.com/mingnatthakitt/">GitHub</a>
          <a className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b2a7b6] hover:text-primary hover:drop-shadow-[0_0_5px_#00e3fd] transition-all opacity-80 hover:opacity-100" href="https://www.kaggle.com/natthakitt/">Kaggle</a>
          <a className="font-body text-[10px] tracking-[0.2em] uppercase text-[#b2a7b6] hover:text-primary hover:drop-shadow-[0_0_5px_#00e3fd] transition-all opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/natthakitt-prapunwattana/">LinkedIn</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_5px_#00e3fd]"></span>
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-secondary">System Online</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
