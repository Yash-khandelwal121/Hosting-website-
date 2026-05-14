import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ChevronLeft, Share2, MessageCircle } from 'lucide-react';
import OptimizedImage from '../../components/OptimizedImage';

const BLOG_POSTS = {
  'nvme-hosting-speeds': {
    title: 'The Impact of NVMe on Hosting Speeds in 2024',
    date: 'May 12, 2024',
    author: 'David Chen',
    role: 'Infrastructure Architect',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>The transition from traditional SATA SSDs to NVMe (Non-Volatile Memory Express) has been the single most significant advancement in hosting hardware over the last decade. As we move through 2024, the adoption of Gen4 and even Gen5 NVMe storage is setting new benchmarks for website performance.</p>
      
      <h3>Why NVMe Matters for Your Stack</h3>
      <p>Unlike traditional SSDs that use the SATA interface (originally designed for mechanical hard drives), NVMe communicates directly with the CPU via the PCIe lane. This eliminates bottlenecks and allows for significantly higher IOPS (Input/Output Operations Per Second).</p>
      
      <h3>Performance Benchmarks</h3>
      <p>In our latest stress tests, we found that NVMe-backed instances performed database queries up to 5x faster than standard SSD instances. For WordPress sites with high plugin counts, this translates to a 40% reduction in Time to First Byte (TTFB).</p>
      
      <ul>
        <li><strong>SATA SSD:</strong> ~550 MB/s Sequential Read</li>
        <li><strong>NVMe Gen3:</strong> ~3,500 MB/s Sequential Read</li>
        <li><strong>NVMe Gen4:</strong> ~7,500 MB/s Sequential Read</li>
      </ul>
      
      <p>If your provider isn't offering NVMe in 2024, you're leaving performance on the table. It is no longer a premium feature; it's an industry standard for production-ready infrastructure.</p>
    `
  },
  'vultr-vs-digitalocean': {
    title: 'Global Latency Analysis: Vultr vs DigitalOcean',
    date: 'May 10, 2024',
    author: 'Sarah Jenkins',
    role: 'Cloud Engineer',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Choosing between Vultr and DigitalOcean often comes down to network presence and latency requirements. We deployed identical instances in 15 global regions to see who provides the snappiest response times for global users.</p>
      
      <h3>Network Topology Comparison</h3>
      <p>Vultr's massive expansion into 32+ data centers gives it a significant edge in specific regions like Asia and Southern Europe. DigitalOcean, while having fewer regions, offers a highly optimized global backbone that excels in North American and North European routes.</p>
      
      <h3>The Latency Data</h3>
      <p>Our testing showed that Vultr's "High Frequency" instances combined with their global network resulted in the lowest average latency across 60% of our test nodes. However, DigitalOcean's App Platform provided more consistent performance for containerized workloads.</p>
      
      <p>For high-performance gaming or real-time communication apps, Vultr is the clear winner. For general-purpose web apps and ease of management, DigitalOcean remains the gold standard.</p>
    `
  },
  'ddos-security': {
    title: 'Securing Your Infrastructure Against DDoS Attacks',
    date: 'May 08, 2024',
    author: 'Michael Rossi',
    role: 'Security Specialist',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>DDoS attacks are becoming larger and more sophisticated. Relying solely on your hosting provider's basic protection is often no longer enough for mission-critical applications.</p>
      
      <h3>The Multi-Layer Defense Strategy</h3>
      <p>A robust defense requires protection at multiple levels of the OSI model. From Layer 3/4 network filtering to Layer 7 application-level protection, you need a holistic approach.</p>
      
      <h3>Key Components of Modern Defense</h3>
      <ul>
        <li><strong>Anycast Network:</strong> Spreading the traffic load across multiple global nodes to prevent any single point of failure.</li>
        <li><strong>Hardware Filtering:</strong> Using specialized hardware like scrubbing centers to filter out malicious packets before they reach your server.</li>
        <li><strong>WAF (Web Application Firewall):</strong> Protecting against SQL injection, XSS, and other Layer 7 attacks.</li>
      </ul>
      
      <p>Providers like Hetzner and Vultr offer excellent built-in DDoS protection, but for extreme cases, integrating a service like Cloudflare is highly recommended.</p>
    `
  },
  'managed-wordpress-hosting': {
    title: 'Is Managed WordPress Hosting Worth the Premium?',
    date: 'May 05, 2024',
    author: 'Emma Wilson',
    role: 'WordPress Expert',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>The price gap between a $5 VPS and a $30 managed WordPress plan can be hard to justify. In this deep dive, we break down exactly what you're paying for when you choose a managed provider.</p>
      
      <h3>The Hidden Costs of Unmanaged Hosting</h3>
      <p>When you run your own VPS, you are the sysadmin. Security updates, PHP optimizations, backup management, and server hardening fall on your shoulders. Managed hosting automates all of this.</p>
      
      <h3>Performance Comparison</h3>
      <p>Our benchmarks show that managed providers like SiteGround use proprietary caching layers that can outperform a default Nginx setup by 30%. However, a highly optimized LiteSpeed server on a Vultr HF instance will still win on raw speed.</p>
      
      <p><strong>Verdict:</strong> If your time is worth more than $50/hour, managed hosting is a steal. If you're a developer who enjoys server tuning, stick to a raw VPS.</p>
    `
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h1 className="text-4xl text-white font-bold">Post Not Found</h1>
        <Link to="/blog" className="text-primary mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-12"
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {post.author[0]}
                </div>
                <div>
                  <div className="text-white font-bold">{post.author}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{post.role}</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-primary" /> {post.date}</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-primary" /> {post.readTime}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <OptimizedImage src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
          </div>

          <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-bold
              prose-li:text-slate-400
              prose-a:text-primary hover:prose-a:text-blue-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
             <div className="flex items-center space-x-4">
                <button className="flex items-center px-6 py-3 bg-navy-900 border border-white/5 rounded-xl text-white font-bold text-sm hover:bg-navy-800 transition-all">
                  <Share2 className="w-4 h-4 mr-3 text-primary" /> Share Article
                </button>
                <button className="flex items-center px-6 py-3 bg-navy-900 border border-white/5 rounded-xl text-white font-bold text-sm hover:bg-navy-800 transition-all">
                  <MessageCircle className="w-4 h-4 mr-3 text-primary" /> Comment
                </button>
             </div>
             <div className="flex items-center space-x-2">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest mr-4">Tags:</span>
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-[10px] font-bold uppercase tracking-widest">Hardware</span>
                <span className="px-3 py-1 bg-navy-900 border border-white/5 rounded-lg text-slate-400 text-[10px] font-bold uppercase tracking-widest">Performance</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
