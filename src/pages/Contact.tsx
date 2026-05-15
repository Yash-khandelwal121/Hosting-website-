import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MessageSquare, Users, Send, CheckCircle2, 
  MapPin, Globe, ArrowRight, Zap, Loader2
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name) newErrors.name = 'Full name is required';
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.subject) newErrors.subject = 'Subject is required';
    if (!formState.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-9xl font-black text-white mb-8 tracking-tighter">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
              Our engineering support team is available 24/7 to assist with architectural decisions, server migrations, and infrastructure scaling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { 
                  title: 'Email Support', 
                  desc: 'Send us a detailed technical query.', 
                  val: 'hello@hostnestic.online', 
                  icon: Mail, 
                  action: () => window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@hostnestic.online',
                  label: 'Send Email'
                },
                { 
                  title: 'Developer Community', 
                  desc: 'Join 50k+ developers on our forums.', 
                  val: 'community.hostnestic.online', 
                  icon: Users, 
                  action: () => window.open('https://community.hostnestic.online', '_blank'),
                  label: 'Join Community'
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={item.action}
                  className="premium-card p-8 group hover:bg-navy-900/80 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 font-medium">{item.desc}</p>
                  <div className="text-white font-bold mb-6">{item.val}</div>
                  <button 
                    className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors"
                  >
                    {item.label} <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="p-8 bg-navy-900/30 rounded-[2rem] border border-white/5">
                <h4 className="text-white font-black mb-6 uppercase text-[10px] tracking-[0.3em]">Global Headquarters</h4>
                <div className="space-y-6 text-sm font-medium text-slate-400">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>123 Data Center Way, Silicon Valley, CA 94025, USA</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-5 h-5 text-primary shrink-0" />
                    <span>www.hostnestic.online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="premium-card p-10 lg:p-16 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center h-full space-y-8"
                    >
                      <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-black text-white mb-4">Transmission Received!</h2>
                        <p className="text-slate-400 text-lg max-w-md font-medium">
                          Our engineers have received your inquiry. Expect a detailed technical response within 15 minutes.
                        </p>
                      </div>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="btn-primary px-10 py-4 rounded-2xl font-black"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">Direct Message to Engineering</h2>
                        <p className="text-slate-400 font-medium">Fill out the form below and an infrastructure expert will be assigned to your case immediately.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                            <input 
                              type="text" 
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                              placeholder="John Doe"
                              className={`w-full bg-navy-900 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium`}
                            />
                            {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.name}</p>}
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                            <input 
                              type="email" 
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              placeholder="john@company.com"
                              className={`w-full bg-navy-900 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium`}
                            />
                            {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                          <input 
                            type="text" 
                            value={formState.subject}
                            onChange={(e) => setFormState({...formState, subject: e.target.value})}
                            placeholder="Scaling Architecture Query"
                            className={`w-full bg-navy-900 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium`}
                          />
                          {errors.subject && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.subject}</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                          <textarea 
                            rows={6}
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            placeholder="Describe your technical requirements or infrastructure challenges..."
                            className={`w-full bg-navy-900 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all font-medium resize-none`}
                          ></textarea>
                          {errors.message && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.message}</p>}
                        </div>

                        <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className="btn-primary w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {status === 'submitting' ? (
                            <>
                              <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                              Transmitting...
                            </>
                          ) : (
                            <>
                              Deploy Message <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-navy-900/10 border-t border-navy-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-12 h-12 text-primary/40 mx-auto mb-8" />
          <h3 className="text-2xl lg:text-3xl font-black text-white italic mb-8">
            "The responsiveness of HostNestic's engineering team during our migration was unparalleled. They didn't just review providers; they helped us build our stack."
          </h3>
          <div className="flex items-center justify-center space-x-4">
             <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center font-bold text-white">JD</div>
             <div className="text-left">
                <div className="text-white font-bold">Jason Drax</div>
                <div className="text-primary text-[10px] font-black uppercase tracking-widest">VP Engineering @ CloudLayer</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
