import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, Headphones, Globe, ArrowRight, CheckCircle, 
  Star, Server, Cpu, Database, Award, BarChart3, Activity, 
  ShieldCheck, Users, Quote, Layout, MessageCircle, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROVIDERS } from '../constants/providers';
import OptimizedImage from '../components/OptimizedImage';

// Official Provider Logos
import hostingerLogo from "@/assets/providers/hostinger-color.svg";
import cloudwaysLogo from "@/assets/providers/cloudways-color.svg";
import digitaloceanLogo from "@/assets/providers/digitalocean-color.svg";
import vultrLogo from "@/assets/providers/vultr-color.svg";

const Home = () => {
  const featuredProviders = PROVIDERS.slice(0, 4);
  const trustLogos = PROVIDERS.slice(0, 8);

  const testimonials = [
    {
      name: 'Alex Rivera',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'HostNestic saved me weeks of manual testing. Their performance data is incredibly accurate and helped us find the right VPS for our scaling API.'
    },
    {
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'I love how I can see real-time latency from global nodes. It is the only hosting review site I trust for independent technical data.'
    },
    {
      name: 'Marcus Thorne',
      role: 'CTO @ CloudScale',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'The comparison matrix is a game-changer. We switched our dedicated fleet to Hetzner based on the price-to-performance reports here.'
    }
  ];

  const floatingLogos = [
    { name: 'Cloudways', url: '/logo1.png' },
    { name: 'Bluehost', url: '/logo2.png' },
    { name: 'SiteGround', url: '/logo3.png' },
    { name: 'Vultr', url: '/logo4.png' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        {/* Animated Background Assets */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] pointer-events-none">
          {/* Subtle grid pattern typical of Linear/Vercel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-50 mix-blend-screen"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full opacity-60 mix-blend-screen"></div>
          
          {/* Infrastructure Illustration */}
          <div className="absolute right-[-10%] top-20 hidden xl:block opacity-20">
             <OptimizedImage 
               src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" 
               alt="Server Infrastructure" 
               className="w-[600px] rounded-3xl shadow-2xl rotate-3 border border-white/5"
               fallbackType="server"
             />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span>Trusted by 100,000+ Developers Worldwide</span>
              </div>
              <h1 className="text-6xl lg:text-[5.5rem] font-black text-white mb-8 leading-[1.05] tracking-tight">
                Scale Faster. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-indigo-400">
                  Compare Better.
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
                Independent performance benchmarks for the world's top hosting providers. We test CPU, NVMe speeds, and latency daily so you don't have to.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/hosting/vps" className="bg-white text-navy-950 hover:bg-slate-100 flex items-center justify-center group w-full sm:w-auto px-8 py-4 text-[15px] rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                  Compare VPS
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/reviews" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 w-full sm:w-auto px-8 py-4 text-[15px] rounded-full font-bold backdrop-blur-sm transition-all flex items-center justify-center">
                  Read Reviews
                </Link>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                <div className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-green-500" /> <span>Independent Data</span></div>
                <div className="flex items-center space-x-2"><Activity className="w-4 h-4 text-primary" /> <span>Live Benchmarks</span></div>
                <div className="flex items-center space-x-2"><Users className="w-4 h-4 text-blue-400" /> <span>Community Driven</span></div>
              </div>
            </motion.div>

            {/* Dashboard Visual Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
                <div className="bg-[#0A0F1A]/95 backdrop-blur-2xl rounded-[2rem] p-8 relative overflow-hidden border border-white/5 shadow-inner">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase">Global Analytics v5.0</div>
                  </div>

                  {/* Real Performance Bars */}
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div className="space-y-6">
                      {[
                        { label: 'CPU Performance', val: 98, color: 'bg-primary' },
                        { label: 'Disk Throughput', val: 92, color: 'bg-blue-500' },
                        { label: 'Global Latency', val: 96, color: 'bg-indigo-500' },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="flex justify-between text-[10px] text-slate-400 mb-2 font-bold uppercase tracking-widest">
                            <span>{stat.label}</span>
                            <span>{stat.val}%</span>
                          </div>
                          <div className="h-2 bg-navy-900 rounded-full overflow-hidden border border-white/5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${stat.val}%` }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className={`h-full ${stat.color} shadow-[0_0_15px_rgba(59,130,246,0.3)]`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-lg">
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30 group-hover:scale-110 transition-transform">
                         <BarChart3 className="w-6 h-6 text-primary" />
                       </div>
                       <div className="text-4xl font-black text-white tracking-tight">99.99%</div>
                       <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Uptime Reliability</div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center justify-between mb-5">
                       <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.15em]">Live Network Status</h4>
                       <span className="flex items-center text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                         Real-time
                       </span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                       {[
                         { loc: 'SFO', ms: 14 }, { loc: 'FRA', ms: 22 }, { loc: 'TYO', ms: 36 }, { loc: 'SYD', ms: 48 }
                       ].map(l => (
                         <div key={l.loc} className="text-center p-3 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                            <div className="text-[10px] text-slate-400 font-bold mb-1 tracking-wider">{l.loc}</div>
                            <div className="text-sm font-mono text-white">{l.ms}<span className="text-slate-500 text-[10px]">ms</span></div>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Provider Logos */}
              {floatingLogos.map((logo, idx) => (
                <motion.div 
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className={`absolute w-24 h-24 floating-logo z-30 cursor-pointer bg-[#0A0F1A]/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group
                    ${idx === 0 ? '-top-12 -right-12' : 
                      idx === 1 ? 'top-1/2 -right-20' : 
                      idx === 2 ? '-bottom-12 -left-12' : 
                      'top-1/4 -left-20'}
                  `}
                  style={{ animationDelay: `${idx * 0.5}s` }}
                >
                  {logo.name === 'Vultr' ? (
                    <div className="w-16 h-16 bg-white rounded-[1rem] flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/fallback-logo.png";
                        }}
                      />
                    </div>
                  ) : (
                    <img 
                      src={logo.url} 
                      alt={logo.name} 
                      className="w-[65%] h-[65%] object-contain opacity-100 brightness-110 transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-logo.png";
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-navy-950 border-y border-navy-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] mb-12">Officially Audited & Partnered Providers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
            {trustLogos.map(p => (
              <div key={p.id} className="h-8 flex items-center justify-center">
                <OptimizedImage src={p.logo} alt={p.name} className="h-full w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Grid */}
      <section className="py-24 relative bg-navy-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">World-Class Infrastructure</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              We monitor network stability and hardware performance 24/7. Filter by regions, pricing, or specific tech requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProviders.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="premium-card p-8 group flex flex-col border-navy-800 hover:border-primary/50 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="w-[88px] h-[88px] rounded-3xl bg-white flex items-center justify-center overflow-hidden shrink-0 mb-6 shadow-lg">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-[65%] h-[65%] object-contain block"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/fallback-logo.png";
                    }}
                  />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{p.name}</h3>
                  <div className="flex items-center text-yellow-500 font-bold text-xs bg-navy-950 px-2.5 py-1 rounded-lg border border-white/5">
                    <Star className="w-3.5 h-3.5 fill-current mr-1.5" /> {p.rating}
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-10 leading-relaxed flex-grow font-medium">
                  {p.description}
                </p>

                <div className="pt-8 border-t border-navy-800 space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Starts at</span>
                      <span className="text-3xl font-black text-white">{p.price}</span>
                   </div>
                   <div className="grid grid-cols-1 gap-3 pt-4">
                      <a 
                        href={p.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary w-full py-4 text-center rounded-2xl font-black flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                      >
                        Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <Link to={`/provider/${p.id}`} className="block w-full py-3 text-center text-xs font-bold text-slate-500 hover:text-white transition-colors">
                        Full Benchmark Report
                      </Link>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-950/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Voice of the Community</h2>
            <p className="text-slate-400 font-medium">Professional developers and CTOs rely on HostNestic for critical decisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="premium-card p-12 relative flex flex-col items-center text-center group hover:bg-navy-900/80 transition-colors">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                <div className="w-24 h-24 rounded-full border-4 border-navy-800 overflow-hidden mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <OptimizedImage src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed text-lg">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-black text-xl">{t.name}</h4>
                  <p className="text-primary text-[11px] font-bold uppercase tracking-widest mt-2">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="premium-card p-16 lg:p-24 rounded-[4rem] bg-gradient-to-br from-primary/20 via-navy-900 to-navy-950 border-white/5 relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
            <div className="flex-grow space-y-8 relative z-10">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">Scale Without <br />Limits Today.</h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto lg:mx-0 font-medium">
                Find the perfect hosting partner in under 2 minutes. No credit card required to compare.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                <Link to="/hosting/vps" className="btn-primary px-12 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-primary/30">Start Comparing Now</Link>
                <Link to="/contact" className="btn-secondary px-12 py-5 rounded-2xl text-xl font-black">Talk to Engineering</Link>
              </div>
            </div>
            <div className="w-full lg:w-2/5 hidden lg:block relative z-10">
               <OptimizedImage 
                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" 
                 alt="Infrastructure Graphics" 
                 className="rounded-[3rem] shadow-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-1000 border border-white/10"
                 fallbackType="cloud"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
