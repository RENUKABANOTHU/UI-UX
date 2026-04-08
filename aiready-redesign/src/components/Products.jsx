import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, UserCog, Database, Zap, Cpu, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'For Students',
    description: 'Personalized active learning companions.',
    products: [
      {
        id: 'cypher',
        name: 'Cypher',
        role: 'Active Learning Companion',
        benefit: 'Personalized Growth',
        description: 'An AI-powered companion that encourages critical thinking and active learning rather than just providing answers.',
        icon: GraduationCap,
        color: '#06b6d4'
      },
      {
        id: 'zion',
        name: 'Zion',
        role: 'Creative AI Tool Suite',
        benefit: 'Future Skills',
        description: '30+ high-utility AI tools for student research, multi-modal creation, and safe experimentation.',
        icon: Zap,
        color: '#eab308'
      }
    ]
  },
  {
    title: 'For Educators',
    description: 'Automate administration and reclaim yours.',
    products: [
      {
        id: 'morpheus',
        name: 'Morpheus',
        role: 'AI Teaching Agent',
        benefit: '5h+ Saved / Week',
        description: 'Automates lesson planning and grading assistance, allowing teachers to focus on student mentorship.',
        icon: UserCog,
        color: '#3b82f6'
      }
    ]
  },
  {
    title: 'For Leadership',
    description: 'Secure infrastructure for your school.',
    products: [
      {
        id: 'matrix',
        name: 'Matrix',
        role: 'Secure AI Infrastructure',
        benefit: 'Data Sovereignty',
        description: 'Deploy generative AI on your own servers. Ensures 100% data privacy and institutional control.',
        icon: Database,
        color: '#10b981'
      },
      {
        id: 'neo',
        name: 'NEO',
        role: 'Physical AI Lab',
        benefit: 'Hands-on Innovation',
        description: 'A dedicated laboratory environment with cutting-edge AI hardware for hands-on student experimentation.',
        icon: Cpu,
        color: '#d946ef'
      }
    ]
  }
];

const Products = () => {
  return (
    <section id="products" className="section-py products-section">
      <div className="container">
        <div className="products-header">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="products-title text-white">Unified <span className="text-gradient">Impact</span></h2>
            <p className="products-subtitle">
              Stop stitching together disconnected tools. Our ecosystem provides a cohesive intelligence layer that transforms every stakeholder's experience.
            </p>
          </motion.div>
        </div>

        <div className="categories-stack">
          {categories.map((category, catIndex) => (
            <div key={category.title} className="category-group">
              <div className="category-header">
                <h3 className="category-name text-white">{category.title}</h3>
                <div className="category-divider"></div>
                <p className="category-desc">{category.description}</p>
              </div>

              <div className="products-grid">
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card product-card"
                    whileHover={{ y: -10 }}
                  >
                    <div 
                      className="product-icon-box"
                      style={{ backgroundColor: `${product.color}15`, color: product.color }}
                    >
                      <product.icon size={28} />
                    </div>
                    
                    <div className="product-meta">
                       <h4 className="product-name text-white font-bold">{product.name}</h4>
                       <span className="product-benefit">{product.benefit}</span>
                    </div>
                    
                    <p className="product-role">{product.role}</p>
                    <p className="product-description">{product.description}</p>
                    
                    <button className="product-link btn-ghost">
                      Explore Solution <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ))}
                
                {catIndex === categories.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card custom-card"
                  >
                    <h4 className="custom-title text-white">Custom AI Architecture</h4>
                    <p className="custom-desc">We build bespoke AI layers for unique school requirements and legacy systems.</p>
                    <button className="btn-secondary w-full">Contact Architecture Team</button>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-section { background: rgba(3, 7, 18, 0.4); position: relative; }
        .products-header { max-width: 800px; margin-bottom: 5rem; }
        .products-title { font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.04em; }
        .products-subtitle { font-size: 1.25rem; color: var(--text-secondary); line-height: 1.6; }
        
        .categories-stack { display: flex; flex-direction: column; gap: 8rem; }
        
        .category-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 768px) {
          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .category-divider { display: none; }
        }
        .category-name { font-size: 2.5rem; font-weight: 800; white-space: nowrap; letter-spacing: -0.03em; }
        .category-divider { height: 1px; flex: 1; background: linear-gradient(to right, var(--border-color), transparent); }
        .category-desc { color: var(--text-tertiary); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.15em; }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr; }
        }
        
        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 36px;
          padding: 3rem;
          border-color: rgba(255,255,255,0.03);
          background: rgba(15, 23, 42, 0.3);
        }
        .product-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.5rem;
          box-shadow: 0 8px 32px -8px currentColor;
        }
        .product-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .product-name { font-size: 1.85rem; }
        .product-benefit {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.45rem 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-secondary);
        }
        
        .product-role {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
        }
        .product-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 3rem;
          flex: 1;
        }
        
        .product-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }
        .product-link:hover { color: var(--accent-blue); gap: 1.25rem; }
        
        .custom-card {
          border-style: dashed;
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          padding: 3rem;
        }
        .custom-title { font-size: 1.75rem; margin-bottom: 1.5rem; }
        .custom-desc { font-size: 1rem; color: var(--text-tertiary); margin-bottom: 3rem; line-height: 1.6; }
        .w-full { width: 100%; justify-content: center; }

        .text-white { color: #ffffff !important; opacity: 1 !important; }
      `}</style>
    </section>
  );
};

export default Products;
