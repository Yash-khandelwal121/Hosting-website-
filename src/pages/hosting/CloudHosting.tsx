import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Globe, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const CloudHosting = () => {
  const cloudProviders = PROVIDERS.filter(p => p.category.includes('Cloud'));

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Cloud Infrastructure Analysis
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">Premium Cloud Hosting</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            High-availability infrastructure for mission-critical applications. We compare managed cloud platforms and raw public cloud providers for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudProviders.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 group hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="w-16 h-16 bg-white p-3 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-navy-950 group-hover:scale-105 transition-transform">
                <OptimizedImage src={p.logo} alt={p.name} className="w-full" fallbackType="cloud" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                <div className="flex items-center text-yellow-500 font-bold text-xs">
                  <Star className="w-4 h-4 fill-current mr-1" /> {p.rating}
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                {p.description}
              </p>
              
              <div className="space-y-4 mb-8 pt-6 border-t border-navy-800 flex-grow">
                {p.features.map(f => (
                  <div key={f} className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 shrink-0" /> {f}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full py-4 text-center text-sm flex items-center justify-center"
                >
                  Get Started <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <Link to={`/provider/${p.id}`} className="block w-full py-3 text-center text-xs font-bold text-slate-500 hover:text-white transition-colors">
                  Detailed Comparison
                </Link>
              </div>
            </motion.div>
          ))}
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

export default CloudHosting;
