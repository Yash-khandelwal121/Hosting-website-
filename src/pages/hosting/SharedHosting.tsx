import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, Zap, Star, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const SharedHosting = () => {
  const sharedProviders = PROVIDERS.filter(p => p.category.includes('Shared'));

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Best Entry-Level Hosting
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">Shared Hosting Comparison</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Reliable and affordable hosting for blogs, portfolios, and small business websites. We prioritize speed and security for the most popular shared hosting platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sharedProviders.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 flex flex-col h-full border-navy-700/50 hover:border-primary/40"
            >
              <div className="w-16 h-16 bg-white p-3 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-navy-950">
                <OptimizedImage src={p.logo} alt={p.name} className="w-full" fallbackType="globe" />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                  <div className="flex items-center text-yellow-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current mr-1" /> {p.rating}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {p.description}
                </p>
                <div className="space-y-4 mb-8">
                  {p.features.slice(0, 4).map(f => (
                    <div key={f} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-navy-800">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Starts at</div>
                    <div className="text-3xl font-bold text-white">{p.price}<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                  </div>
                  <Link to={`/provider/${p.id}`} className="text-primary font-bold text-sm flex items-center hover:text-white transition-colors">
                    Review <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full py-4 text-center flex items-center justify-center"
                >
                  Visit Official Website <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedHosting;
