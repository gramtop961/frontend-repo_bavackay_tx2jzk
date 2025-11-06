import React from 'react';
import { Brain, Rocket, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500">
            <Brain className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">AI Education</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#courses" className="hover:text-white transition-colors">Courses</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors">
            <Sparkles className="h-4 w-4" /> Explore
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset]">
            <Rocket className="h-4 w-4" /> Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
