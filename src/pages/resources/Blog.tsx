import React, { useState } from 'react';
import { MessageSquare, Calendar, User, Search, ArrowRight, Tag, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from '../../components/OptimizedImage';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    { 
      id: 1,
      slug: 'nvme-hosting-speeds',
      title: 'The Impact of NVMe on Hosting Speeds in 2024', 
      date: 'May 12, 2024', 
      author: 'David Chen',
      category: 'Hardware',
      desc: 'Discover why the shift from SSD to Gen4 NVMe storage is the single most important factor for your server\'s disk I/O performance this year.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    },
    { 
      id: 2,
      slug: 'vultr-vs-digitalocean',
      title: 'Global Latency Analysis: Vultr vs DigitalOcean', 
      date: 'May 10, 2024', 
      author: 'Sarah Jenkins',
      category: 'Benchmarks',
      desc: 'We deployed instances in 15 global regions to measure real-world network latency and throughput for the two biggest developer clouds.',
      image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=800',
      authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    { 
      id: 3,
      slug: 'ddos-security',
      title: 'Securing Your Infrastructure Against DDoS Attacks', 
      date: 'May 08, 2024', 
      author: 'Michael Rossi',
      category: 'Security',
      desc: 'Best practices for implementing multi-layer defense strategies using Anycast networks and hardware-level filtering.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
    },
    { 
      id: 4,
      slug: 'managed-wordpress-hosting',
      title: 'Is Managed WordPress Hosting Worth the Premium?', 
      date: 'May 05, 2024', 
      author: 'Emma Wilson',
      category: 'Shared Hosting',
      desc: 'Comparing SiteGround and Hostinger managed plans against raw VPS setups for performance, security, and ease of use.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
      authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
             Infrastructure Insights
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">The Hosting Blog</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Technical analysis, cloud architecture trends, and data-driven infrastructure reviews.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search technical articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900 border border-navy-800 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-primary transition-all shadow-xl"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'Hardware', 'Benchmarks', 'Security'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-xl bg-navy-800 border border-navy-700 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-white hover:border-primary transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-24">
          <Link to={`/blog/${posts[0].slug}`} className="block">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 group border-navy-800 hover:border-primary/20"
            >
              <div className="h-96 lg:h-auto relative overflow-hidden">
                <OptimizedImage src={posts[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" fallbackType="server" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-primary rounded-lg text-white font-bold text-xs uppercase tracking-widest shadow-2xl">
                  Featured Report
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                   <OptimizedImage src={posts[0].authorImg} alt={posts[0].author} className="w-10 h-10 rounded-full border-2 border-navy-800" />
                   <div>
                      <div className="text-xs text-white font-bold">{posts[0].author}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{posts[0].date}</div>
                   </div>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 line-clamp-3">
                  {posts[0].desc}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-navy-800">
                  <div className="btn-primary px-8 py-3 rounded-xl flex items-center group/btn font-bold text-sm">
                    Full Analysis <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                  <div className="p-3 bg-navy-900 border border-navy-800 rounded-xl text-slate-500 hover:text-white transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {posts.slice(1).map((post, i) => (
            <Link to={`/blog/${post.slug}`} key={post.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-10 items-start group"
              >
                <div className="w-full md:w-56 h-56 bg-navy-800 rounded-[2.5rem] overflow-hidden relative shadow-2xl shrink-0">
                  <OptimizedImage src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fallbackType="server" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
                </div>
                <div className="flex-grow pt-4">
                  <div className="flex items-center space-x-3 mb-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <Tag className="w-3 h-3 text-primary" /> <span>{post.category}</span>
                    <span className="text-slate-700">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.desc}
                  </p>
                  <div className="flex items-center space-x-3">
                     <OptimizedImage src={post.authorImg} alt={post.author} className="w-6 h-6 rounded-full border border-navy-800" />
                     <span className="text-xs text-slate-500 font-medium">By <span className="text-slate-300">{post.author}</span></span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
