import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Server, Heart } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const About = () => {
  const stats = [
    { label: 'Data Nodes', val: '500+', icon: Server },
    { label: 'Latency Checks', val: '12M+', icon: Activity },
    { label: 'Verified Reviews', val: '25k+', icon: Shield },
    { label: 'Active Users', val: '100k+', icon: Users },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
               Our Mission
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
               Independence. <br />
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">Accuracy.</span> <br />
               Performance.
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-xl">
               HostNestic was founded by a team of system administrators who were tired of biased hosting reviews. We built a platform that relies on raw data, not marketing budgets.
            </p>
            <div className="flex space-x-6">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tight">2024</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Founded</span>
               </div>
               <div className="w-px h-12 bg-navy-800"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tight">100%</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Independent</span>
               </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
             <div className="premium-card p-2 rounded-[3rem] bg-gradient-to-br from-primary/20 to-navy-800 overflow-hidden shadow-2xl">
                <OptimizedImage src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="Infrastructure" className="rounded-[2.8rem] w-full h-full object-cover" fallbackType="server" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px] -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-navy-950/50 border-y border-navy-800 py-24 mb-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
               {stats.map((s, i) => (
                  <div key={i} className="text-center space-y-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                        <s.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-4xl font-black text-white">{s.val}</h3>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{s.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
         <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">The Engineering Minds</h2>
            <p className="text-slate-400">The team behind the benchmarks and comparisons.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               { name: 'Marcus Thorne', role: 'Lead SysAdmin', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300' },
               { name: 'Elena Vance', role: 'Cloud Architect', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300' },
               { name: 'Satoshi Nakamoto', role: 'Security Expert', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300' },
               { name: 'Emma Wilson', role: 'Product Design', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300' },
            ].map((m, i) => (
               <div key={i} className="premium-card p-6 flex flex-col items-center text-center group border-navy-800 hover:border-primary/30">
                  <div className="w-40 h-40 rounded-full border-4 border-navy-800 overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-navy-950">
                     <OptimizedImage src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{m.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">{m.role}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Final Values Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="premium-card p-12 lg:p-20 bg-gradient-to-br from-navy-900 to-navy-950 border-primary/20 text-center relative overflow-hidden">
            <Heart className="w-20 h-20 text-primary/10 absolute top-10 left-10" />
            <h2 className="text-4xl font-bold text-white mb-8 relative z-10">Driven by the Community.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 relative z-10 max-w-2xl mx-auto">
               We don't accept sponsorships that influence our ratings. HostNestic is and will always remain an independent resource for the developer community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
               <button className="btn-primary px-10 py-4 rounded-2xl font-bold">Contact Our Team</button>
               <button className="px-10 py-4 rounded-2xl bg-navy-900 border border-navy-800 text-white font-bold hover:bg-navy-800 transition-colors">Join Discord</button>
            </div>
         </div>
      </section>
    </div>
  );
};

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default About;
