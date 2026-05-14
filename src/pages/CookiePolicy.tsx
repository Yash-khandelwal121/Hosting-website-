import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, PieChart } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="tag-primary mb-4">Cookie Usage</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Cookie <span className="gradient-text">Policy</span></h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Transparent information about how we use cookies to personalize your hosting research experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Necessary Cookies',
                desc: 'Essential for the website to function properly, such as navigating between routes and maintaining security.',
                icon: Cookie
              },
              {
                title: 'Analytics Cookies',
                desc: 'Help us understand how users interact with our benchmarks and articles so we can improve the content.',
                icon: PieChart
              },
              {
                title: 'Marketing Cookies',
                desc: 'Used to track the effectiveness of our affiliate links and show you more relevant hosting deals.',
                icon: Settings
              }
            ].map((cookie, i) => (
              <div key={i} className="premium-card p-8 group hover:bg-navy-900/80 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cookie.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cookie.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cookie.desc}</p>
              </div>
            ))}
          </div>

          <div className="premium-card p-10 bg-navy-900/40">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Info className="w-6 h-6 text-primary mr-3" /> Managing Your Preferences
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              You can choose to disable cookies through your individual browser options. For more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              <span className="px-3 py-1 bg-navy-950 rounded-lg border border-white/5">Chrome</span>
              <span className="px-3 py-1 bg-navy-950 rounded-lg border border-white/5">Firefox</span>
              <span className="px-3 py-1 bg-navy-950 rounded-lg border border-white/5">Safari</span>
              <span className="px-3 py-1 bg-navy-950 rounded-lg border border-white/5">Edge</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
