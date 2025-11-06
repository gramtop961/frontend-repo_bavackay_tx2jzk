import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} AI Education. All rights reserved.</p>
            <p className="text-xs text-white/50">Futuristic learning platform for AI, ML, and Data Science.</p>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a aria-label="GitHub" href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            <a aria-label="Twitter" href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a aria-label="YouTube" href="#" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
