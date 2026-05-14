import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Cloud, Cpu, Globe, Shield, Zap, 
  Settings, Database, Layout, 
  ArrowRight, CheckCircle2, Monitor, Code, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const Services = () => {
  const services = [
    {
      title: 'VPS Hosting',
      icon: Server,
      description: 'High-performance virtual private servers with dedicated resources and root access.',
      features: ['NVMe Storage', 'DDoS Protection', 'Root Access', '99.9% Uptime'],
      price: 'From $5.00/mo',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      color: 'from-blue-500 to-indigo-600',
      fallback: 'server'
    },
    {
      title: 'Cloud Hosting',
      icon: Cloud,
      description: 'Scalable cloud infrastructure that grows with your business needs automatically.',
      features: ['Auto-scaling', 'Global CDN', 'Managed Backups', 'High Availability'],
      price: 'From $10.00/mo',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      color: 'from-purple-500 to-pink-600',
      fallback: 'cloud'
    },
    {
      title: 'Dedicated Servers',
      icon: Cpu,
      description: 'Maximum power and control with dedicated physical hardware for your most demanding apps.',
      features: ['Intel/AMD CPUs', 'Up to 1TB RAM', 'Custom Network', '24/7 Support'],
      price: 'From $80.00/mo',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      color: 'from-red-500 to-orange-600',
      fallback: 'cpu'
    },
    {
      title: 'Shared Hosting',
      icon: Globe,
      description: 'Affordable and reliable hosting perfect for personal websites and small businesses.',
      features: ['Free Domain', 'SSL Included', 'Easy Setup', 'One-click Install'],
      price: 'From $2.95/mo',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      color: 'from-green-500 to-emerald-600',
      fallback: 'globe'
    },
    {
      title: 'Managed Hosting',
      icon: Settings,
      description: 'Let our experts handle the server management while you focus on your business.',
      features: ['Server Updates', 'Security Patches', 'Performance Tuning', 'Priority Support'],
      price: 'From $25.00/mo',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      color: 'from-amber-500 to-yellow-600',
      fallback: 'server'
    },
    {
      title: 'WordPress Hosting',
      icon: Layout,
      description: 'Optimized hosting environments specifically tuned for maximum WordPress performance.',
      features: ['WP Pre-installed', 'Staging Environment', 'Auto-updates', 'Specialized Support'],
      price: 'From $4.50/mo',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800',
      color: 'from-cyan-500 to-blue-600',
      fallback: 'globe'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter">
              Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-medium">
              World-class hosting solutions designed to scale your vision with extreme speed, security, and enterprise reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card group overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 z-10`}></div>
                  <OptimizedImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackType={service.fallback as any}
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <div className="p-4 bg-navy-950/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-10 flex-grow">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center text-sm text-slate-300 font-medium">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-navy-800 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Starts at</div>
                      <div className="text-2xl font-black text-white">{service.price}</div>
                    </div>
                    <Link to="/contact" className="btn-primary py-3 px-8 rounded-xl text-sm font-bold shadow-lg shadow-primary/20">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-navy-900/20 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-20 tracking-tight">Built for Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Shield, title: 'Enterprise Security', desc: 'Hardware-level DDoS protection and automated security patching.' },
              { icon: Zap, title: 'Extreme Speed', desc: 'Latest Gen NVMe storage and optimized networking stack.' },
              { icon: Monitor, title: 'Intuitive Control', desc: 'Custom hPanel for effortless server management and automation.' },
              { icon: Code, title: 'API Integration', desc: 'Full RESTful API support for automated scaling and management.' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/20">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-white font-black text-xl mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="premium-card p-16 rounded-[3rem] bg-gradient-to-br from-primary/10 to-navy-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 relative z-10">Need a Custom Setup?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-medium">
                Our infrastructure engineers are ready to build a specialized environment for your enterprise needs.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center px-10 py-4 rounded-2xl text-lg font-black relative z-10 group">
                Contact Sales Engineering <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
