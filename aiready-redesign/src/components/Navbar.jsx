import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#products' },
    { name: 'Trust & Security', href: '#trust' },
    { name: 'How It Works', href: '#philosophy' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav className={`fixed-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo group" onClick={() => window.scrollTo(0, 0)}>
          <div className="logo-box">AR</div>
          <div className="logo-text">
            <span className="brand-name">AI READY <span className="accent-text">SCHOOL</span></span>
            <span className="brand-tagline">India's AI Pioneer</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
              <span className="nav-underline"></span>
            </a>
          ))}
        </div>

        <div className="nav-actions-desktop">
          <button className="nav-contact">
            <Phone size={14} /> Contact Sales
          </button>
          <button className="btn-primary nav-cta">
            <Calendar size={16} /> Schedule Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="nav-mobile-menu glass"
          >
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="mobile-item" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <div className="mobile-actions">
                <button className="btn-primary w-full">Schedule a Demo</button>
                <button className="btn-secondary w-full">Contact Sales</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 0;
          transition: all 0.4s var(--transition-smooth);
        }
        .nav-scrolled {
          padding: 0.75rem 0;
          background: rgba(3, 7, 18, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .logo-box {
          width: 40px;
          height: 40px;
          background: var(--accent-blue);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: white;
          box-shadow: 0 8px 16px -4px var(--accent-blue-glow);
        }
        .logo-text {
          display: flex;
          flex-col: column;
          line-height: 1;
        }
        .brand-name {
          display: block;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.125rem;
          letter-spacing: -0.02em;
        }
        .accent-text { color: var(--accent-blue); }
        .brand-tagline {
          display: block;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-cyan);
          font-weight: 700;
          margin-top: 2px;
        }
        .nav-links-desktop {
          display: flex;
          gap: 2.5rem;
        }
        @media (max-width: 768px) { .nav-links-desktop { display: none; } }
        .nav-item {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }
        .nav-item:hover { color: white; }
        .nav-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-blue);
          transition: width 0.3s;
        }
        .nav-item:hover .nav-underline { width: 100%; }
        .nav-actions-desktop {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .nav-actions-desktop { display: none; } }
        .nav-contact {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s;
        }
        .nav-contact:hover { color: white; }
        .nav-cta {
          padding: 0.6rem 1.5rem;
          font-size: 0.875rem;
        }
        .nav-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) { .nav-mobile-toggle { display: block; } }
        .nav-mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .mobile-item {
          font-size: 1.25rem;
          font-weight: 700;
          text-decoration: none;
          color: white;
        }
        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        .w-full { width: 100%; justify-content: center; }
      `}</style>
    </nav>
  );
};

export default Navbar;
