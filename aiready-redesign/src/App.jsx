import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import TrustSection from './components/TrustSection';
import { motion } from 'framer-motion';
import { BookOpen, Newspaper, Laptop, MessageCircle, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        
        {/* Roadmap / Philosophy Section */}
        <section id="philosophy" className="section-py roadmap-section">
          <div className="container">
            <div className="badge mb-6">The AI Sovereignty Roadmap</div>
            <h2 className="roadmap-title text-white">How we transition your <br />school into the <span className="text-gradient">AI Era.</span></h2>
            
            <div className="roadmap-grid mt-12">
              {[
                { step: '01', title: 'Audit & Analysis', desc: 'We audit your current tech stack and identify high-impact AI opportunities for teachers.' },
                { step: '02', title: 'Private Deployment', desc: 'Secure, on-premise installation of the AI Ready Layer. Your data never leaves your campus.' },
                { step: '03', title: 'Staff Empowerment', desc: 'Hands-on training sessions focused on using Cypher and Morpheus to reclaim teacher time.' },
                { step: '04', title: 'Continuous Evolution', desc: 'Quarterly updates to keep your school at the bleeding edge of educational AI innovation.' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="roadmap-card"
                >
                  <div className="roadmap-step">{item.step}</div>
                  <h4 className="roadmap-card-title text-white">{item.title}</h4>
                  <p className="roadmap-card-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Products />

        {/* Resources Section */}
        <section id="resources" className="section-py resources-section">
          <div className="container">
            <div className="grid-2">
              <div>
                <h2 className="section-title text-white">Sovereignty <span className="text-gradient">Library</span></h2>
                <p className="section-subtitle">Deep dives into educational AI ethics, data privacy, and implementation frameworks.</p>
                <button className="btn-secondary mt-8">View All Resources</button>
              </div>
              
              <div className="resources-grid">
                {[
                  { title: 'The 2026 AI Ethics Handbook', type: 'Whitepaper', icon: BookOpen },
                  { title: 'Safe AI Deployment for K-12', type: 'Technical Guide', icon: Laptop },
                  { title: 'Case Study: Kendal Ville Academy', type: 'Success Story', icon: Newspaper }
                ].map((res, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="resource-item"
                  >
                    <res.icon className="icon-blue" size={24} />
                    <div className="res-content">
                      <span className="res-type">{res.type}</span>
                      <h4 className="res-title text-white">{res.title}</h4>
                    </div>
                    <ArrowUpRight size={20} className="res-arrow" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Call to Action */}
        <section className="section-py cta-section">
          <div className="container">
            <div className="cta-glass glass">
              <h2 className="cta-title text-white">Ready to <span className="text-gradient">rethink</span> your school?</h2>
              <p className="cta-description">
                Join India's leading schools adopting human-first AI infrastructure. Secure your spot in the next cohort of AI-ready institutions.
              </p>
              <div className="cta-actions">
                <button className="btn-primary">Schedule Your Demo</button>
                <button className="btn-secondary">Contact Architecture Team</button>
              </div>
              
              <div className="cta-glow"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand text-white">AI READY SCHOOL</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Support</a>
          </div>
          <div className="footer-copy">© 2026 AI Ready School. Built for Sovereignty.</div>
        </div>
      </footer>

      <style jsx>{`
        .app-container {
          position: relative;
          min-h: 100vh;
          overflow-x: hidden;
        }
        
        .roadmap-title { font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 2rem; }
        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .roadmap-card {
          padding: 2.5rem;
          border-left: 2px solid var(--border-color);
          transition: border-color 0.3s;
        }
        .roadmap-card:hover { border-color: var(--accent-blue); }
        .roadmap-step {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
          letter-spacing: 0.2em;
        }
        .roadmap-card-title { font-size: 1.5rem; margin-bottom: 1rem; }
        .roadmap-card-desc { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; }

        .resources-section { background: rgba(3, 7, 18, 0.2); }
        .section-title { font-size: 3rem; margin-bottom: 1.5rem; }
        .section-subtitle { font-size: 1.125rem; color: var(--text-secondary); max-width: 450px; }
        
        .resources-grid { display: flex; flex-direction: column; gap: 1.5rem; }
        .resource-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .resource-item:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--accent-blue);
        }
        .res-type { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-cyan); font-weight: 700; }
        .res-title { font-size: 1.1rem; margin-top: 0.25rem; }
        .res-arrow { margin-left: auto; opacity: 0.3; transition: all 0.3s; }
        .resource-item:hover .res-arrow { opacity: 1; color: var(--accent-blue); }

        .cta-section { position: relative; overflow: hidden; }
        .cta-glass {
          position: relative;
          padding: 6rem;
          border-radius: 48px;
          text-align: center;
          overflow: hidden;
          z-index: 1;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        @media (max-width: 768px) { .cta-glass { padding: 3rem 1.5rem; } }
        
        .cta-title { font-size: clamp(2.5rem, 6vw, 4.5rem); margin-bottom: 1.5rem; }
        .cta-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--accent-blue-glow) 0%, transparent 70%);
          z-index: -1;
          opacity: 0.3;
          filter: blur(100px);
        }
        
        .footer {
          padding: 4rem 0;
          border-top: 1px solid var(--border-color);
          margin-top: 4rem;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        @media (max-width: 768px) { .footer-container { flex-direction: column; text-align: center; } }
        
        .footer-brand { font-weight: 800; font-family: var(--font-heading); font-size: 1.25rem; }
        .footer-links { display: flex; gap: 2.5rem; font-size: 0.875rem; color: var(--text-tertiary); }
        .footer-links a { text-decoration: none; color: inherit; transition: color 0.3s; }
        .footer-links a:hover { color: white; }
        .footer-copy { font-size: 0.8rem; color: var(--text-tertiary); }

        .text-white { color: #ffffff !important; }
      `}</style>
    </div>
  );
}

export default App;
