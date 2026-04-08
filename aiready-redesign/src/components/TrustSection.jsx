import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, Activity, TrendingDown, Clock, Building2 } from 'lucide-react';

const stats = [
  { label: 'Teacher Time Saved', value: '5h+', sub: 'per week / educator', icon: Clock },
  { label: 'Admin Overhead', value: '-30%', sub: 'reduction in paperwork', icon: TrendingDown },
  { label: 'Data Sovereignty', value: '100%', sub: 'private infrastructure', icon: Lock },
];

const schoolLogos = [
  "Delhi Public School", "Kendal Ville Academy", "St. Xavier's International", 
  "Modern Education Group", "Bloomfield Schools", "Heritage Global School"
];

const TrustSection = () => {
  return (
    <section id="trust" className="section-py trust-section">
      <div className="container">
        {/* Trusted By Section */}
        <div className="trusted-by-container mb-32">
          <p className="trusted-label">Trusted by India's Leading K-12 Institutions</p>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...schoolLogos, ...schoolLogos].map((logo, i) => (
                <div key={i} className="logo-item">
                  <Building2 size={18} className="icon-blue" />
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trust-main-grid grid-2">
          <div className="trust-content">
            <div className="badge mb-6">Security & Institutional Trust</div>
            <h2 className="trust-title text-white">
              "The schools that lead with AI won't just adopt tools — they'll <span className="text-gradient">rethink sovereignty.</span>"
            </h2>
            <p className="trust-description">
              We understand the skepticism. That's why AI Ready School is built on the principle of <strong>Institutional Sovereignty</strong>. We don't just give you tools; we give you a private intelligence layer that you own, control, and safeguard.
            </p>

            <div className="trust-features">
              <div className="trust-feature-item">
                <div className="feature-icon-box">
                  <ShieldCheck className="icon-blue" />
                </div>
                <div className="feature-text">
                  <h4 className="feature-name text-white">Private On-Premise Deployment</h4>
                  <p className="feature-desc">Keep sensitive student data behind your own firewall. Zero external training on your data.</p>
                </div>
              </div>
              <div className="trust-feature-item">
                <div className="feature-icon-box icon-cyan-bg">
                  <Globe className="icon-cyan" />
                </div>
                <div className="feature-text">
                  <h4 className="feature-name text-white">Global Compliance Standards</h4>
                  <p className="feature-desc">GDPR, FERPA, and India-specific Edu-Data protocols baked into the foundation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card stat-card ${i === 0 ? 'full-width' : ''}`}
              >
                <stat.icon className="icon-blue mb-4" size={32} />
                <div className="stat-value text-white">{stat.value}</div>
                <div className="stat-label text-white">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass stat-card dashboard-mockup"
            >
              <div className="mock-header">
                <Activity size={14} className="icon-cyan" />
                <span>Real-time Sovereignty Status</span>
              </div>
              <div className="mock-body">
                <div className="mock-bar"></div>
                <div className="mock-bar short"></div>
                <p className="mock-text text-white">Institutional Data: <strong>Locked</strong></p>
              </div>
              <p className="stat-sub mt-4">Active Deployment across 500+ Institutions</p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-section { position: relative; background: rgba(15, 23, 42, 0.2); }
        .trusted-label {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-tertiary);
          margin-bottom: 2.5rem;
        }
        .logo-marquee {
          overflow: hidden;
          padding: 1rem 0;
          position: relative;
        }
        .logo-marquee::before, .logo-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          width: 15rem;
          height: 100%;
          z-index: 2;
        }
        .logo-marquee::before { left: 0; background: linear-gradient(to right, var(--bg-color), transparent); }
        .logo-marquee::after { right: 0; background: linear-gradient(to left, var(--bg-color), transparent); }
        
        .logo-track {
          display: flex;
          gap: 4rem;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1.1rem;
          opacity: 0.7;
          filter: grayscale(1);
          transition: all 0.3s;
        }
        .logo-item:hover { opacity: 1; filter: grayscale(0); color: white; }

        .trust-title {
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          margin-bottom: 2rem;
          font-style: italic;
          line-height: 1.1;
        }
        .trust-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          line-height: 1.8;
          max-width: 600px;
        }
        .trust-features {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .trust-feature-item {
          display: flex;
          gap: 1.5rem;
        }
        .feature-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }
        .icon-cyan-bg { background: rgba(6, 182, 212, 0.1); border-color: rgba(6, 182, 212, 0.1); }
        .icon-blue { color: var(--accent-blue); }
        .icon-cyan { color: var(--accent-cyan); }
        
        .feature-name {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .feature-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .trust-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 640px) { .trust-stats-grid { grid-template-columns: 1fr; } }
        
        .stat-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem;
          border-radius: 32px;
        }
        .full-width { grid-column: span 2; }
        .stat-value {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          font-family: var(--font-heading);
          letter-spacing: -0.04em;
        }
        .stat-label {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .stat-sub {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-tertiary);
          font-weight: 700;
        }
        
        .dashboard-mockup {
          padding: 2rem;
          border-color: rgba(6, 182, 212, 0.2);
          background: rgba(6, 182, 212, 0.05);
          justify-content: flex-start;
          border-radius: 32px;
        }
        .mock-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
        }
        .mock-body {
          background: rgba(0,0,0,0.3);
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid rgba(6, 182, 212, 0.1);
        }
        .mock-bar {
          height: 8px;
          width: 90%;
          background: var(--accent-cyan);
          border-radius: 4px;
          margin-bottom: 12px;
          opacity: 0.6;
          box-shadow: 0 0 20px var(--accent-cyan-glow);
        }
        .mock-bar.short { width: 60%; opacity: 0.3; }
        .mock-text {
          font-size: 0.85rem;
          margin-top: 15px;
          color: var(--text-secondary);
        }
        
        .text-white { color: #ffffff !important; }
      `}</style>
    </section>
  );
};

export default TrustSection;
