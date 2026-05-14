import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, Send, Globe, Link2, Mail, MapPin, 
  ShieldCheck, ArrowRight, Zap, ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/assets/logo/hostnestic-logo.png"
                alt="HostNestic"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
              The world's leading infrastructure comparison platform. We benchmark 50+ providers daily to help you make data-driven decisions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Send, label: 'Twitter', url: '#' },
                { icon: Globe, label: 'Website', url: '#' },
                { icon: Link2, label: 'LinkedIn', url: '#' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 border border-navy-800"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em] flex items-center">
              <Zap className="w-3 h-3 text-primary mr-2" /> Hosting Categories
            </h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/hosting/vps" className="text-slate-400 hover:text-primary transition-colors flex items-center group">VPS Hosting <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/hosting/cloud" className="text-slate-400 hover:text-primary transition-colors flex items-center group">Cloud Hosting <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/hosting/shared" className="text-slate-400 hover:text-primary transition-colors flex items-center group">Shared Hosting <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/hosting/dedicated" className="text-slate-400 hover:text-primary transition-colors flex items-center group">Dedicated Servers <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/portfolio" className="text-primary font-bold hover:text-white transition-colors flex items-center group">Infrastructure Portfolio <ExternalLink className="w-3 h-3 ml-2" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Resources Hub</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Premium Services</Link></li>
              <li><Link to="/reviews" className="text-slate-400 hover:text-primary transition-colors">Expert Reviews</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-primary transition-colors">Infrastructure Blog</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-slate-400 hover:text-primary flex items-center"><ShieldCheck className="w-4 h-4 mr-2" /> Affiliate Disclosure</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Contact Engineering</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>123 Data Center Way, Silicon Valley, CA 94025</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:hello@hostnestic.online" className="footer-link">hello@hostnestic.online</a>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-navy-900 rounded-2xl border border-navy-800">
              <h5 className="text-white font-bold text-[10px] mb-3 uppercase tracking-widest">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-navy-950 border border-navy-800 rounded-l-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-primary transition-colors" 
                />
                <button className="bg-primary px-4 py-3 rounded-r-xl text-white hover:bg-blue-600 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-[11px] text-slate-500 font-medium">
              <p className="mb-4 leading-relaxed">
                <strong>Disclaimer:</strong> HostNestic.online is a professional review site that receives compensation from the companies whose products we review. We test each product thoroughly and give high marks to only the very best. We are independently owned and the opinions expressed here are our own.
              </p>
              <p>© {currentYear} HostNestic. All rights reserved. Built with precision for the hosting industry.</p>
            </div>
            <div className="flex flex-wrap lg:justify-end gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
              <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
              <Link to="/support-center" className="footer-link text-primary">Support Center</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
