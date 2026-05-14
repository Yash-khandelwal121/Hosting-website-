import React from 'react';
import { ShieldCheck, Info, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AffiliateDisclosure = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-12 bg-navy-800/20"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-white">Affiliate Disclosure</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Smart Hosting Decisions Start Here. At <strong>HostNestic</strong>, we aim to provide independent, data-driven reviews and comparisons to help you choose the best infrastructure for your projects.
            </p>

            <div className="p-6 bg-navy-950/50 rounded-2xl border border-primary/20 flex items-start space-x-4">
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-sm text-slate-400 italic">
                “This website may earn affiliate commissions when users purchase hosting services through our links. This helps support our platform at no additional cost to users. We only recommend hosting providers we trust and review carefully.”
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How We Review</h2>
            <p>
              Our team of system administrators and developers tests every provider on this platform. While we may receive compensation from some of the companies whose products we review, this does not influence our ratings or performance data. We prioritize:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Raw CPU and Disk performance benchmarks.</li>
              <li>Actual uptime monitoring over 12+ months.</li>
              <li>Support quality and response times.</li>
              <li>Pricing transparency and renewal rates.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Questions?</h2>
            <p>
              If you have any questions regarding our affiliate relationships or how we test hosting providers, please feel free to <a href="/contact" className="text-primary hover:underline">contact us</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
