import React from 'react';
import { Cpu, Server, HardDrive, Shield, Zap, ExternalLink, Globe, CheckCircle } from 'lucide-react';
import { PROVIDERS } from '../../constants/providers';
import OptimizedImage from '../../components/OptimizedImage';

const DedicatedServers = () => {
  // Filter for providers that likely offer Dedicated (AWS, Hetzner, etc.)
  const dedicatedProviders = PROVIDERS.filter(p => p.category.includes('Dedicated') || p.category.includes('Enterprise'));

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Enterprise Infrastructure
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">Bare Metal Dedicated Servers</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Ultimate performance with zero virtualization overhead. We review the industry's most reliable bare metal providers for high-workload applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {dedicatedProviders.map((p, i) => (
            <div key={p.id} className="premium-card p-10 flex flex-col lg:flex-row gap-12 items-center border-navy-800">
              <div className="lg:w-1/4 flex flex-col items-center">
                <div className="w-24 h-24 bg-white p-4 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-navy-950">
                  <OptimizedImage src={p.logo} alt={p.name} className="w-full" fallbackType="cpu" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <div className="px-3 py-1 bg-navy-900 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-navy-800">
                  {p.tag}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: Cpu, label: 'Compute Power', val: 'Intel Xeon / AMD EPYC' },
                    { icon: Server, label: 'Memory Range', val: '64GB to 2TB DDR4/5' },
                    { icon: HardDrive, label: 'Storage Options', val: 'NVMe / SATA / RAID' },
                    { icon: Globe, label: 'Network Speed', val: '1Gbps to 100Gbps' },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-start space-x-3">
                      <spec.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{spec.label}</div>
                        <div className="text-slate-200 text-sm font-medium">{spec.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-navy-950/50 rounded-xl border border-navy-800 flex items-center justify-between">
                  <div className="flex items-center text-xs text-slate-400">
                    <Shield className="w-4 h-4 mr-2 text-green-500" /> Fully Managed Options Available
                  </div>
                  <div className="flex items-center text-xs text-slate-400">
                    <Zap className="w-4 h-4 mr-2 text-primary" /> Instant Provisioning
                  </div>
                </div>
              </div>

              <div className="lg:w-1/4 w-full flex flex-col justify-center space-y-4">
                <div className="text-center p-6 bg-navy-900 rounded-2xl border border-navy-800">
                  <div className="text-xs text-slate-500 mb-1 uppercase font-bold tracking-widest">Starting Price</div>
                  <div className="text-4xl font-bold text-white mb-1">{p.price === 'Free Tier' ? '$189' : p.price}</div>
                  <div className="text-xs text-slate-500">per month</div>
                </div>
                <a 
                  href={p.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full py-4 text-center flex items-center justify-center font-bold"
                >
                  Configure Server <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DedicatedServers;
