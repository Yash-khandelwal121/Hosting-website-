import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Search, ArrowRight, ExternalLink, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const Comparisons = () => {
  const comparisonSets = [
    { 
      title: 'DigitalOcean vs Vultr', 
      p1: PROVIDERS.find(p => p.id === 'digitalocean'), 
      p2: PROVIDERS.find(p => p.id === 'vultr'),
      metric: 'Latency & Developer Experience'
    },
    { 
      title: 'Linode vs Hetzner', 
      p1: PROVIDERS.find(p => p.id === 'linode'), 
      p2: PROVIDERS.find(p => p.id === 'hetzner'),
      metric: 'Raw Price-to-Performance'
    },
    { 
      title: 'AWS vs Google Cloud', 
      p1: PROVIDERS.find(p => p.id === 'aws'), 
      p2: PROVIDERS.find(p => p.id === 'google-cloud'),
      metric: 'Enterprise Cloud Ecosystem'
    },
    { 
      title: 'Hostinger vs SiteGround', 
      p1: PROVIDERS.find(p => p.id === 'hostinger'), 
      p2: PROVIDERS.find(p => p.id === 'siteground'),
      metric: 'WordPress Managed Performance'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Independent Data Analysis
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">Hosting Comparison Matrix</h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Stop the guesswork. We've matched the world's leading providers head-to-head based on raw hardware specs, network reliability, and support quality.
          </p>
        </div>

        {/* Feature Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {comparisonSets.map((set, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 border-navy-700/50 group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                    <OptimizedImage src={set.p1?.logo || ''} alt="P1" className="w-full" fallbackType="server" />
                  </div>
                  <span className="text-slate-600 font-bold text-xl italic">VS</span>
                  <div className="w-12 h-12 bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                    <OptimizedImage src={set.p2?.logo || ''} alt="P2" className="w-full" fallbackType="server" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Key Focus</span>
                  <span className="text-white text-sm font-bold">{set.metric}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">{set.title} Analysis</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-navy-950/50 rounded-xl border border-navy-800">
                  <div className="text-[10px] text-slate-500 font-bold uppercase mb-2">{set.p1?.name}</div>
                  <div className="flex items-center text-primary font-bold">
                    <Star className="w-3 h-3 mr-1 fill-current" /> {set.p1?.rating}
                  </div>
                </div>
                <div className="p-4 bg-navy-950/50 rounded-xl border border-navy-800">
                  <div className="text-[10px] text-slate-500 font-bold uppercase mb-2">{set.p2?.name}</div>
                  <div className="flex items-center text-indigo-400 font-bold">
                    <Star className="w-3 h-3 mr-1 fill-current" /> {set.p2?.rating}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/reviews`} className="btn-secondary py-3 px-6 text-center text-sm flex-grow">
                  Read Full VS Report
                </Link>
                <a 
                  href={set.p1?.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary py-3 px-6 text-center text-sm flex-grow flex items-center justify-center"
                >
                  Visit {set.p1?.name} <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Dashboard Placeholder */}
        <div className="premium-card p-12 bg-gradient-to-br from-navy-900 to-navy-950 border-primary/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Global Performance Dashboard</h2>
              <p className="text-slate-400 text-lg mb-8">We track latency from 50+ global locations to all major hosting clusters in real-time.</p>
              
              <div className="space-y-6">
                {[
                  { label: 'Network Throughput', val: '98%', icon: Globe },
                  { label: 'CPU Performance', val: '94%', icon: Cpu },
                  { label: 'Uptime Stability', val: '99.99%', icon: ShieldCheck },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm text-slate-300 mb-2">
                      <span className="flex items-center"><m.icon className="w-4 h-4 mr-2 text-primary" /> {m.label}</span>
                      <span className="font-bold">{m.val}</span>
                    </div>
                    <div className="h-1.5 bg-navy-950 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: m.val === '99.99%' ? '100%' : m.val }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy-950/50 p-6 rounded-2xl border border-navy-800 backdrop-blur-md">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Node Monitoring</span>
                </div>
                <div className="space-y-4 font-mono text-xs text-slate-400">
                  <div className="flex justify-between"><span>[NYC-1] DigitalOcean</span> <span className="text-green-500">2ms Response</span></div>
                  <div className="flex justify-between"><span>[FRA-1] Hetzner</span> <span className="text-green-500">1ms Response</span></div>
                  <div className="flex justify-between"><span>[TYO-1] Vultr</span> <span className="text-green-500">4ms Response</span></div>
                  <div className="flex justify-between"><span>[SGP-1] Linode</span> <span className="text-green-500">3ms Response</span></div>
                  <div className="pt-4 text-primary opacity-50 underline italic">Streaming data via WebSockets...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-1.75 1.355-2.504.75l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.755.605-2.805.172-2.504-.75l1.518-4.674a1 1 0 00-.363-1.118L2.98 10.101c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default Comparisons;
