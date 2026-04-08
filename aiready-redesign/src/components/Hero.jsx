import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge hero-badge">
              <ShieldCheck size={14} /> Global Standard for AI in Education
            </div>

            <h1 className="hero-title">
              The <span className="text-gradient">Operating System</span> <br />
              for Your School.
            </h1>

            <p className="hero-description">
              A single, secure intelligence layer that automates teacher administration, personalizes student learning, and safeguards your school's data assets.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">
                Schedule a Demo <ArrowRight size={20} />
              </button>
              <button className="btn-secondary group">
                <div className="play-icon">
                  <Play size={16} className="fill-current" />
                </div>
                The Ecosystem
              </button>
            </div>

            <div className="hero-trust-bullets">
              <div className="trust-bullet">
                <CheckCircle size={18} className="icon-cyan" />
                <span>30% Reduction in Teacher Admin Time</span>
              </div>
              <div className="trust-bullet">
                <CheckCircle size={18} className="icon-cyan" />
                <span>100% Data Sovereignty & Privacy</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="ecosystem-viz">
            <div className="viz-core glass">
              <div className="core-inner">
                <span className="core-label">CORE</span>
                <span className="core-sub">Engine</span>
              </div>
            </div>

            {/* Orbiting Elements */}
            {[
              { name: 'CYPHER', role: 'Students', pos: 'top', color: 'cyan' },
              { name: 'MORPHEUS', role: 'Teachers', pos: 'bottom', color: 'blue' },
              { name: 'MATRIX', role: 'Leadership', pos: 'left', color: 'indigo' },
              { name: 'ZION', role: 'Resources', pos: 'right', color: 'cyan' },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  delay: i * 0.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`viz-node glass node-${item.pos}`}
              >
                <div className="node-name">{item.name}</div>
                <div className="node-role">{item.role}</div>
              </motion.div>
            ))}
            
            <div className="viz-ring"></div>
            <div className="viz-ring-outer"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          padding: 160px 0 100px;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .hero-badge { margin-bottom: 2.5rem; }
        @media (max-width: 1024px) { .hero-badge { justify-content: center; } }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          margin-bottom: 2rem;
          line-height: 1.05;
        }
        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.6;
        }
        @media (max-width: 1024px) { .hero-description { margin: 0 auto 3rem; } }
        
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 1024px) { .hero-actions { justify-content: center; } }
        
        .play-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          transition: transform 0.3s var(--transition-bounce);
        }
        .btn-secondary:hover .play-icon { transform: scale(1.1); }
        
        .hero-trust-bullets {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .trust-bullet {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        @media (max-width: 1024px) { .trust-bullet { justify-content: center; } }
        .icon-cyan { color: var(--accent-cyan); }
        
        /* Ecosystem Visualization */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .ecosystem-viz {
          position: relative;
          width: 450px;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 640px) {
          .ecosystem-viz {
            width: 320px;
            height: 320px;
          }
        }
        .viz-core {
          width: 120px;
          height: 120px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          border: 1px solid rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 40px var(--accent-blue-glow);
        }
        .core-inner { text-align: center; }
        .core-label {
          display: block;
          font-weight: 800;
          color: var(--accent-blue);
          font-size: 1.5rem;
        }
        .core-sub {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-weight: 700;
          opacity: 0.6;
        }
        
        .viz-node {
          position: absolute;
          padding: 1rem 1.5rem;
          border-radius: 18px;
          width: 130px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .viz-node:hover {
          border-color: var(--accent-blue);
          transform: scale(1.1) !important;
        }
        .node-name { font-weight: 700; font-size: 0.8rem; }
        .node-role {
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }
        
        .node-top { top: 0; left: 50%; transform: translateX(-50%); }
        .node-bottom { bottom: 0; left: 50%; transform: translateX(-50%); }
        .node-left { left: 0; top: 50%; transform: translateY(-50%); }
        .node-right { right: 0; top: 50%; transform: translateY(-50%); }
        
        .viz-ring {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .viz-ring-outer {
          position: absolute;
          width: 450px;
          height: 450px;
          border: 1px dashed rgba(255, 255, 255, 0.03);
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
