import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, MessageCircle, Mail, MessageSquare, 
  Search, ArrowRight, Zap, Play, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportCenter = () => {
  const faqs = [
    { q: 'How do you verify hosting performance?', a: 'We use automated nodes in 12 global regions to test TTFB, latency, and throughput daily.' },
    { q: 'Do you offer custom server consulting?', a: 'Yes, our engineering team provides stack optimization advice via our contact portal.' },
    { q: 'Are the discount codes verified?', a: 'Every promo code is manually tested by our team every Monday to ensure they are active.' },
    { q: 'Can I request a provider review?', a: 'Absolutely. Use the community forum or contact form to submit a request.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden border-b border-navy-900">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter">Support <span className="gradient-text">Center</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Find technical answers, documentation, and get direct assistance from infrastructure experts.
            </p>
            <div className="max-w-2xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search technical guides or FAQs..."
                className="w-full bg-navy-900 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-primary/50 transition-all shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-10 group hover:bg-navy-900/80 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live Engineering Chat</h3>
              <p className="text-slate-400 text-sm mb-8">Real-time troubleshooting and stack advice from cloud engineers.</p>
              <button className="flex items-center text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                Start Chat <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="premium-card p-10 group hover:bg-navy-900/80 transition-all">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-slate-400 text-sm mb-8">Detailed architectural queries and complex technical issues.</p>
              <a href="mailto:hello@hostnestic.online" className="flex items-center text-xs font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="premium-card p-10 group hover:bg-navy-900/80 transition-all">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure Blog</h3>
              <p className="text-slate-400 text-sm mb-8">Deep dives into cloud architecture and hosting performance.</p>
              <Link to="/blog" className="flex items-center text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-white transition-colors">
                Read Articles <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-navy-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Common Questions</h2>
            <p className="text-slate-400">Everything you need to know about our data and processes.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="premium-card p-8 border-white/5">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" /> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportCenter;
