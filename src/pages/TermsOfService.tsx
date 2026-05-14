import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertCircle, ShieldAlert, CheckCircle2 } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="tag-primary mb-4">Terms & Conditions</div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Terms of <span className="gradient-text">Service</span></h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Please read these terms carefully before using the HostNestic platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="premium-card p-10 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Scale className="w-6 h-6 text-primary mr-3" /> 1. Agreement to Terms
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  By accessing or using HostNestic.online, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <ShieldAlert className="w-6 h-6 text-primary mr-3" /> 2. Hosting Reviews Disclaimer
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  The reviews and comparisons on HostNestic are based on our independent research and testing. While we strive for accuracy, we cannot guarantee that all provider information is up-to-date at all times. Users should verify technical specs with the providers directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-primary mr-3" /> 3. Affiliate Relationship
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  HostNestic participates in affiliate marketing programs. We may earn a commission when you purchase services through links on our site. This does not affect our objective review process but helps sustain the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3" /> 4. Usage Restrictions
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  You agree not to use this site for any unlawful purpose, to transmit any malicious code, or to attempt unauthorized access to our administrative systems.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
