import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Server, Globe, Shield, Zap, CheckCircle, ArrowLeft, Star, 
  ExternalLink, Cpu, HardDrive, Network, XCircle, Info, 
  ChevronRight, Database, Headphones
} from 'lucide-react';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const ProviderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const provider = PROVIDERS.find(p => p.id === id);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Redirect if provider not found
    if (!provider && id) {
      navigate('/reviews');
    }
  }, [id, provider, navigate]);

  if (!provider) return null;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <Link to="/reviews" className="inline-flex items-center text-slate-400 hover:text-white transition-colors group font-bold">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Reviews
          </Link>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
            Last Updated: May 2024
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 bg-white p-4 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/10 shrink-0">
                <OptimizedImage src={provider.logo} alt={provider.name} className="w-full" fallbackType="server" />
              </div>
              <div className="text-center md:text-left">
                <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                  {provider.tag}
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-4">{provider.name} Review 2024</h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(provider.rating) ? 'text-yellow-500 fill-current' : 'text-slate-700'}`} />
                    ))}
                    <span className="text-white font-bold ml-2 text-lg">{provider.rating}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                  <span className="text-slate-400 font-medium">{provider.reviews} Verified User Reviews</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl">
                {provider.description} {provider.name} has been a major player in the hosting industry, known for its {provider.tag.toLowerCase()} focus and robust global infrastructure.
              </p>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Uptime (30d)', val: '99.99%', icon: Zap, color: 'text-green-400' },
                { label: 'Avg. Latency', val: '28ms', icon: Network, color: 'text-blue-400' },
                { label: 'Support Speed', val: '2m 14s', icon: Headphones, color: 'text-indigo-400' },
              ].map((stat) => (
                <div key={stat.label} className="premium-card p-6 border-navy-800">
                  <div className="flex items-center space-x-3 mb-4">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.val}</div>
                </div>
              ))}
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="premium-card p-8 bg-green-500/5 border-green-500/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" /> Pros
                </h3>
                <ul className="space-y-4">
                  {provider.pros?.map(p => (
                    <li key={p} className="text-slate-300 flex items-start text-sm">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="premium-card p-8 bg-red-500/5 border-red-500/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <XCircle className="w-6 h-6 text-red-500 mr-2" /> Cons
                </h3>
                <ul className="space-y-4">
                  {provider.cons?.map(c => (
                    <li key={c} className="text-slate-300 flex items-start text-sm">
                      <ChevronRight className="w-4 h-4 text-red-500 mr-2 shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Infrastructure Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {provider.features.map((feature, i) => (
                  <div key={i} className="flex items-center p-5 rounded-2xl bg-navy-800/30 border border-navy-700/50 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-slate-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Placeholder */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
              {[
                { q: `Is ${provider.name} good for small business?`, a: `Yes, ${provider.name} offers scalable plans that start from affordable entry points like ${provider.price}, making it ideal for growing small businesses.` },
                { q: `Does ${provider.name} offer 24/7 support?`, a: `Absolutely. ${provider.name} provides round-the-clock technical support via multiple channels to ensure your infrastructure stays online.` }
              ].map((faq, i) => (
                <div key={i} className="premium-card p-6 border-navy-800">
                  <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="premium-card p-8 bg-gradient-to-br from-primary/10 via-navy-900 to-navy-950 border-primary/30 shadow-2xl shadow-primary/5">
                <div className="text-center mb-8">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Limited Time Offer</span>
                  <div className="text-5xl font-extrabold text-white mt-4 mb-2">{provider.price}</div>
                  <div className="text-slate-400 text-sm">Starting price per month</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" /> 30-Day Money Back Guarantee
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" /> Free Setup & Migration
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" /> No Hidden Contracts
                  </div>
                </div>

                <a 
                  href={provider.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full py-5 flex items-center justify-center text-lg shadow-xl shadow-primary/20"
                >
                  Visit Official Website <ExternalLink className="ml-2 w-5 h-5" />
                </a>
                
                <p className="text-[10px] text-center text-slate-500 mt-6 leading-relaxed">
                  By clicking this link, you will be redirected to the official {provider.name} website. HostNestic may earn a commission on qualifying purchases.
                </p>
              </div>

              <div className="premium-card p-8 mt-8 border-navy-800">
                <h3 className="text-xl font-bold text-white mb-6">Provider Comparison</h3>
                <div className="space-y-4">
                  {PROVIDERS.filter(p => p.id !== id).slice(0, 3).map(p => (
                    <Link key={p.id} to={`/provider/${p.id}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-navy-800 transition-colors group">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white p-1 rounded-lg">
                          <OptimizedImage src={p.logo} alt={p.name} className="w-full" fallbackType="server" />
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-white">{p.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
                <Link to="/comparisons" className="btn-secondary w-full py-3 mt-6 text-sm text-center">
                  Full Comparison Matrix
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
