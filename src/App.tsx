import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const VPSHosting = lazy(() => import('./pages/hosting/VPSHosting'));
const CloudHosting = lazy(() => import('./pages/hosting/CloudHosting'));
const SharedHosting = lazy(() => import('./pages/hosting/SharedHosting'));
const DedicatedServers = lazy(() => import('./pages/hosting/DedicatedServers'));
const Comparisons = lazy(() => import('./pages/hosting/Comparisons'));
const Reviews = lazy(() => import('./pages/hosting/Reviews'));
const Blog = lazy(() => import('./pages/resources/Blog'));
const BlogDetail = lazy(() => import('./pages/resources/BlogDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Footer Pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const SupportCenter = lazy(() => import('./pages/SupportCenter'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const AffiliateDisclosure = lazy(() => import('./pages/AffiliateDisclosure'));
const ProviderDetail = lazy(() => import('./pages/hosting/ProviderDetail'));

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/hosting/vps" element={<VPSHosting />} />
              <Route path="/hosting/cloud" element={<CloudHosting />} />
              <Route path="/hosting/shared" element={<SharedHosting />} />
              <Route path="/hosting/dedicated" element={<DedicatedServers />} />
              <Route path="/comparisons" element={<Comparisons />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/support-center" element={<SupportCenter />} />
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
              <Route path="/provider/:id" element={<ProviderDetail />} />
              {/* Fallback redirects for old paths to prevent dead links */}
              <Route path="/vps-hosting" element={<VPSHosting />} />
              <Route path="/cloud-hosting" element={<CloudHosting />} />
              <Route path="/shared-hosting" element={<SharedHosting />} />
              <Route path="/dedicated-servers" element={<DedicatedServers />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
