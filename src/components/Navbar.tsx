import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Server, Cloud, Cpu, Globe, 
  BarChart, Search, BookOpen, MessageSquare, ShieldCheck,
  Home as HomeIcon, Briefcase, Image as ImageIcon, Info, MessageCircle,
  Layout, Activity, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchIndex = [
    { title: 'VPS Hosting', href: '/hosting/vps', type: 'Page' },
    { title: 'Shared Hosting', href: '/hosting/shared', type: 'Page' },
    { title: 'Cloud Hosting', href: '/hosting/cloud', type: 'Page' },
    { title: 'Dedicated Servers', href: '/hosting/dedicated', type: 'Page' },
    { title: 'DigitalOcean', href: '/provider/digitalocean', type: 'Provider' },
    { title: 'Vultr', href: '/provider/vultr', type: 'Provider' },
    { title: 'Cloudways', href: '/provider/cloudways', type: 'Provider' },
    { title: 'Hostinger', href: '/provider/hostinger', type: 'Provider' },
    { title: 'SiteGround', href: '/provider/siteground', type: 'Provider' },
    { title: 'Bluehost', href: '/provider/bluehost', type: 'Provider' },
    { title: 'Blog', href: '/blog', type: 'Page' },
    { title: 'Reviews', href: '/reviews', type: 'Page' },
    { title: 'Portfolio', href: '/portfolio', type: 'Page' },
    { title: 'About', href: '/about', type: 'Page' },
    { title: 'Contact', href: '/contact', type: 'Page' },
    { title: 'Services', href: '/services', type: 'Page' }
  ];

  const searchResults = searchQuery
    ? searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSelect = (href: string) => {
    navigate(href);
    setSearchQuery('');
    setIsSearchFocused(false);
    setIsOpen(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      handleSearchSelect(searchResults[0].href);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.search-container')) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { 
      name: 'Hosting', 
      href: '#', 
      dropdown: [
        { name: 'VPS Hosting', href: '/hosting/vps', icon: Server, desc: 'High-performance VPS' },
        { name: 'Cloud Hosting', href: '/hosting/cloud', icon: Cloud, desc: 'Scalable infrastructure' },
        { name: 'Shared Hosting', href: '/hosting/shared', icon: Globe, desc: 'Budget-friendly' },
        { name: 'Dedicated Servers', href: '/hosting/dedicated', icon: Cpu, desc: 'Maximum power' },
      ]
    },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Portfolio', href: '/portfolio', icon: ImageIcon },
    { 
      name: 'Resources', 
      href: '#', 
      dropdown: [
        { name: 'Reviews', href: '/reviews', icon: Search, desc: 'Expert evaluations' },
        { name: 'Comparisons', href: '/comparisons', icon: BarChart, desc: 'Provider specs' },
        { name: 'Blog', href: '/blog', icon: MessageSquare, desc: 'Latest news' },
        { name: 'Affiliate Disclosure', href: '/affiliate-disclosure', icon: ShieldCheck, desc: 'Our support model' },
      ]
    },
     { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500">
      <div className="w-full bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[2rem] flex items-center justify-between px-8 h-[76px]">
        {/* Logo - Left Aligned */}
        <div className="flex items-center h-full">
          <Link to="/" className="flex items-center h-full">
            <img
              src="/assets/logo/hostnestic-logo.png"
              alt="HostNestic"
              className="h-[70px] w-auto object-contain transition-all duration-300 hover:opacity-80 scale-110"
            />
          </Link>
        </div>

        {/* Desktop Nav - Center Aligned */}
        <ul className="hidden xl:flex items-center gap-2 h-full m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li 
              key={link.name}
              className="flex items-center h-full relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <button className="flex items-center h-full px-5 text-slate-800 hover:text-primary font-bold transition-colors">
                  <span>{link.name}</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to={link.href} 
                  className={`flex items-center h-full px-5 text-slate-800 hover:text-primary font-bold transition-colors relative ${location.pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-[20px] left-5 right-5 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[400px] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 rounded-3xl grid grid-cols-1 gap-2"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-l border-t border-slate-100 bg-white rotate-45"></div>
                    
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="flex items-center p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover/item:text-primary transition-colors flex items-center">
                            {item.name}
                            <Zap className="w-3 h-3 ml-2 text-yellow-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Right Side CTA - Right Aligned */}
        <div className="hidden xl:flex items-center gap-4 h-full">
          {/* Search Bar */}
          <div className="relative search-container flex items-center h-full">
            <div className={`relative flex items-center transition-all duration-300 ${isSearchFocused ? 'w-64' : 'w-48'}`}>
              <Search className={`absolute left-3 w-4 h-4 transition-colors ${isSearchFocused ? 'text-primary' : 'text-slate-400'}`} />
              <input
                type="text"
                placeholder="Search providers, blogs, reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onKeyDown={handleSearchKeyDown}
                className="w-full h-[42px] pl-9 pr-4 rounded-full bg-navy-950/80 backdrop-blur-md border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
              />
            </div>
            
            {/* Search Dropdown */}
            <AnimatePresence>
              {isSearchFocused && searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[60px] right-0 w-80 bg-navy-950/95 backdrop-blur-xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 rounded-3xl z-50 overflow-hidden"
                >
                  {searchResults.length > 0 ? (
                    <div className="max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                      {searchResults.map((result, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSearchSelect(result.href)}
                          className="w-full text-left flex flex-col p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">{result.title}</span>
                          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">{result.type}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-slate-500 font-medium">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/hosting/vps" 
            className="bg-primary hover:bg-blue-600 text-white py-3 px-8 rounded-full text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95 whitespace-nowrap"
          >
            Compare VPS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center h-full">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 xl:hidden bg-white flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-slate-100">
               <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/assets/logo/hostnestic-logo.png"
                  alt="HostNestic"
                  className="h-16 w-auto object-contain scale-110"
                />
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 hover:text-slate-900">
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-4 py-8">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div className="space-y-4">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">{link.name}</div>
                        <div className="grid grid-cols-1 gap-2 pl-2">
                          {link.dropdown.map((item) => (
                            <Link 
                              key={item.name} 
                              to={item.href} 
                              className="flex items-center space-x-4 p-3 rounded-2xl bg-slate-50 text-slate-700 hover:text-primary hover:bg-slate-100"
                            >
                              <item.icon className="w-5 h-5 text-primary" />
                              <span className="font-bold">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 text-xl font-bold text-slate-900 hover:bg-slate-100"
                      >
                        <link.icon className="w-6 h-6 text-primary" />
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-slate-100">
              <Link to="/hosting/vps" className="btn-primary block w-full py-5 rounded-2xl text-center text-lg font-bold">
                Compare VPS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
