import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="tag-primary mb-4">Legal Framework</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Privacy <span className="gradient-text">Policy</span></h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Your data security is our top priority. Learn how we handle your information with absolute transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="premium-card p-10 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-primary mr-3" /> 1. Data Collection
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    We collect minimal data necessary to provide our hosting comparison services. This includes technical logs, device information, and any data you explicitly provide via contact forms or newsletter subscriptions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-primary mr-3" /> 2. Tracking & Cookies
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    HostNestic uses cookies to improve user experience and analyze traffic patterns. We use industry-standard analytics tools to understand how users interact with our reviews and comparisons.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-3" /> 3. Affiliate Disclosure
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    Some links on this site are affiliate links. This means if you click on the link and purchase the item, we will receive an affiliate commission at no extra cost to you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-primary mr-3" /> 4. Data Protection
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    We implement robust security measures to protect your personal data from unauthorized access, alteration, or disclosure. Our infrastructure is monitored 24/7.
                  </p>
                </section>
              </div>
            </div>

            <div className="space-y-6">
              <div className="premium-card p-8 bg-primary/5 border-primary/20">
                <FileText className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0"></div>
                    No sale of personal data.
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0"></div>
                    Transparent affiliate model.
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0"></div>
                    GDPR & CCPA compliant.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
