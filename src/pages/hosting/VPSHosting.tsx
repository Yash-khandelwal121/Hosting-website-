import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Shield, Cpu, HardDrive, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const VPSHosting = () => {
  // Filter for providers that offer VPS
  const vpsProviders = PROVIDERS.filter(p => p.category.includes('VPS'));

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Updated May 2024
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">Best VPS Hosting Providers</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Independent performance benchmarks for the world's leading Virtual Private Server (VPS) providers. We test CPU steal, disk I/O, and global latency so you don't have to.
          </p>
        </div>

        {/* Comparison Table (Desktop) */}
        <div className="hidden lg:block overflow-hidden premium-card mb-16 border-navy-700/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-navy-950/80 border-b border-navy-800">
                <th className="p-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Provider</th>
                <th className="p-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Entry Price</th>
                <th className="p-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Performance Tag</th>
                <th className="p-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Rating</th>
                <th className="p-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800">
              {vpsProviders.map((provider) => (
                <tr key={provider.id} className="hover:bg-navy-800/20 transition-all duration-300 group">
                  <td className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-lg">
                        <img src={provider.logo} alt={provider.name} className="w-14 h-14 object-contain" loading="lazy" onError={(e) => { e.currentTarget.src = "/fallback-logo.png"; }} />
                      </div>
                      <div>
                        <span className="font-bold text-white text-lg block">{provider.name}</span>
                        <span className="text-slate-500 text-xs">{provider.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-green-400 font-bold text-2xl">{provider.price}</span>
                    <span className="text-slate-500 text-xs block">per month</span>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      {provider.tag}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center text-yellow-500 font-bold">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {provider.rating}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">{provider.reviews} Reviews</div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end items-center space-x-3">
                      <Link to={`/provider/${provider.id}`} className="text-slate-400 hover:text-white transition-colors text-sm font-bold">
                        Full Specs
                      </Link>
                      <a 
                        href={provider.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary py-3 px-6 text-sm flex items-center rounded-xl"
                      >
                        Visit Site <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View / Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {vpsProviders.map((provider) => (
            <div key={provider.id} className="premium-card p-8 group">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-lg">
                    <img src={provider.logo} alt={provider.name} className="w-14 h-14 object-contain" loading="lazy" onError={(e) => { e.currentTarget.src = "/fallback-logo.png"; }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{provider.name}</h3>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{provider.tag}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-green-400 font-bold text-xl block">{provider.price}</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase">per month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {provider.features.map(f => (
                  <li key={f} className="text-sm text-slate-400 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" /> {f}
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-2 gap-4">
                <Link to={`/provider/${provider.id}`} className="btn-secondary py-3 text-center text-sm">
                  View Specs
                </Link>
                <a 
                  href={provider.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary py-3 text-center text-sm"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure Mini */}
        <div className="mt-12 text-center p-6 bg-navy-950 rounded-2xl border border-navy-800">
          <p className="text-slate-500 text-sm italic">
            HostNestic is supported by our readers. When you buy through links on our site, we may earn an affiliate commission. 
            <Link to="/affiliate-disclosure" className="text-primary hover:underline ml-1">Learn More</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default VPSHosting;
