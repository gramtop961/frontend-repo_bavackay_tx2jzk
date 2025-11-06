import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Learn AI, ML & Data Science
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Futuristic Learning for the AI Generation
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Master the fundamentals to advanced topics in AI, powered by interactive 3D visuals, real-world projects, and a supportive community.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#features" className="rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Explore Features</a>
          <a href="#" className="rounded-md border border-white/15 px-5 py-3 text-sm hover:bg-white/10 transition-colors">View Curriculum</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
