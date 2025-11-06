import React from 'react';
import { Cpu, BookOpen, LineChart, Users } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Hands-on AI Labs',
    desc: 'Build neural nets, tune models, and deploy to production with guided, practical exercises.'
  },
  {
    icon: BookOpen,
    title: 'Structured Curriculum',
    desc: 'From zero to hero: math foundations, ML, deep learning, NLP, CV, and MLOps.'
  },
  {
    icon: LineChart,
    title: 'Career-Focused',
    desc: 'Project-based learning, interview prep, and a portfolio that gets you noticed.'
  },
  {
    icon: Users,
    title: 'Community & Mentors',
    desc: 'Join live sessions, get code reviews, and collaborate with peers worldwide.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What You’ll Learn</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            A modern path into AI with interactive modules and real-world projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-transform hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(56,189,248,0.12), transparent 40%)'}} />
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 border border-white/10">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
