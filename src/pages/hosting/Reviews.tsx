import React from 'react';
import { Star, ArrowRight, CheckCircle, ExternalLink, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const Reviews = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Expert Analysis Hub
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">Expert Hosting Reviews</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Our team of system administrators and developers has spent hundreds of hours testing these providers. Read our full analysis on speed, reliability, and support.
          </p>
        </div>

        <div className="space-y-8">
          {PROVIDERS.map((r, i) => (
            <div key={r.id} className="premium-card p-10 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 flex-grow">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-lg">
                  <img
                    src={r.logo}
                    alt={r.name}
                    className="w-14 h-14 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/fallback-logo.png";
                    }}
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                    <h3 className="text-3xl font-bold text-white tracking-tight">{r.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full tracking-widest border border-primary/20">
                      {r.tag}
                    </span>
                  </div>
                  <p className="text-slate-400 max-w-lg text-sm leading-relaxed mb-4">{r.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center text-xs text-slate-500 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800">
                      <Zap className="w-3 h-3 mr-2 text-primary" /> Speed: 9.8/10
                    </div>
                    <div className="flex items-center text-xs text-slate-500 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800">
                      <Globe className="w-3 h-3 mr-2 text-primary" /> Uptime: 9.9/10
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end space-y-6 shrink-0">
                <div className="text-center md:text-right">
                  <div className="text-5xl font-extrabold text-white mb-1">{r.rating}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Our Final Score</div>
                </div>
                <div className="flex flex-col space-y-3 w-full md:w-auto">
                  <Link to={`/provider/${r.id}`} className="btn-secondary py-3 px-10 text-sm font-bold text-center">
                    Read Full Review
                  </Link>
                  <a 
                    href={r.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary py-3 px-10 text-sm font-bold text-center flex items-center justify-center"
                  >
                    Visit Site <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Affiliate Disclosure Mini */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-xs italic bg-navy-900/50 inline-block px-8 py-3 rounded-full border border-navy-800">
            <ShieldCheck className="w-4 h-4 inline mr-2 text-primary" />
            We may earn a commission when you click our links. <Link to="/affiliate-disclosure" className="text-primary hover:underline ml-1">Read our full disclosure</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
