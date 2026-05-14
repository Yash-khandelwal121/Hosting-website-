import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Server, Cloud, Shield, 
  Cpu, Activity, Zap, Globe, Layout, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const Portfolio = () => {
  const projects = [
    {
      title: 'Global Edge Network v2',
      category: 'Infrastructure',
      description: 'A multi-region edge computing network deployed across 40+ global data centers with sub-10ms latency.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      icon: Globe,
      tags: ['Anycast', 'CDN', 'Edge'],
      fallback: 'globe'
    },
    {
      title: 'Enterprise Cloud Orchestrator',
      category: 'Cloud Deployment',
      description: 'Fully automated cloud orchestration platform for massive-scale enterprise kubernetes clusters.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      icon: Cloud,
      tags: ['K8s', 'Auto-scale', 'Terraform'],
      fallback: 'cloud'
    },
    {
      title: 'Real-time Monitoring Suite',
      category: 'Management',
      description: 'A unified observability dashboard for tracking millions of metrics across global server fleets.',
      image: '/portfolio-image.jpg',
      icon: Activity,
      tags: ['Grafana', 'Prometheus', 'Go'],
      fallback: 'server'
    },
    {
      title: 'FinTech Secure Core',
      category: 'Client Project',
      description: 'Highly secure, PCI-DSS Level 1 compliant infrastructure core for a major digital banking platform.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      icon: Shield,
      tags: ['Security', 'HSM', 'Compliance'],
      fallback: 'cpu'
    },
    {
      title: 'HPC AI Training Cluster',
      category: 'Architecture',
      description: 'Custom GPU-optimized high-performance cluster designed for training large language models.',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800',
      icon: Cpu,
      tags: ['NVIDIA H100', 'RDMA', 'Infiniband'],
      fallback: 'cpu'
    },
    {
      title: 'Bare Metal Dashboard',
      category: 'Software',
      description: 'Next-generation bare metal provisioning system with zero-touch deployment capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      icon: Layout,
      tags: ['Provisioning', 'PXE', 'Redfish'],
      fallback: 'server'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl lg:text-9xl font-black text-white mb-8 tracking-tighter">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Showcase</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
              A deep dive into our most complex infrastructure deployments, architectural innovations, and client success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card group cursor-pointer border-navy-800 hover:border-primary/40 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/10 transition-all duration-500 z-10"></div>
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    fallbackType={project.fallback as any}
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-1.5 bg-navy-950/80 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-navy-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-500 bg-navy-950/50 border border-white/5 px-3 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact" className="flex items-center text-sm font-black text-white group-hover:translate-x-3 transition-all duration-300">
                    View Technical Details <ArrowRight className="ml-2 w-4 h-4 text-primary" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 border-t border-navy-900 bg-navy-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: 'Global Regions', val: '42', icon: Globe },
              { label: 'Uptime (SLA)', val: '99.999%', icon: Activity },
              { label: 'Cloud Deployments', val: '15,000+', icon: Cloud },
              { label: 'Edge Throughput', val: '250 Tbps', icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="group">
                <stat.icon className="w-8 h-8 text-primary/30 mx-auto mb-6 group-hover:text-primary group-hover:scale-110 transition-all" />
                <div className="text-5xl font-black text-white mb-3 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero-like CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="premium-card p-20 bg-gradient-to-br from-primary/20 to-navy-900 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter relative z-10 leading-tight">Ready to build your <br />infrastructure?</h2>
             <Link to="/contact" className="btn-primary inline-flex items-center px-12 py-5 rounded-2xl text-xl font-black relative z-10 hover:scale-105 transition-transform">
                Get Started Today <ExternalLink className="ml-3 w-6 h-6" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
