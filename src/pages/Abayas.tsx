import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Classic', 'Embroidered', 'Printed', 'Embellished']

const products = [
  { id: 1, name: 'Midnight Classic Abaya', price: 'AED 1,800', category: 'Classic', isNew: false, gradient: 'linear-gradient(160deg, #0d0b08 0%, #1a1510 60%, #0d0b08 100%)' },
  { id: 2, name: 'Gold Thread Abaya', price: 'AED 2,600', category: 'Embroidered', isNew: true, gradient: 'linear-gradient(160deg, #1a1208 0%, #2d2010 50%, #1a1208 100%)' },
  { id: 3, name: 'Onyx Crystal Abaya', price: 'AED 3,200', category: 'Embellished', isNew: true, gradient: 'linear-gradient(160deg, #1a1a2a 0%, #2d2d3d 50%, #1a1a2a 100%)' },
  { id: 4, name: 'Ivory Embossed Abaya', price: 'AED 2,800', category: 'Embossed', isNew: true, gradient: 'linear-gradient(160deg, #e8dcc8 0%, #f3e5d8 50%, #d4b8a8 100%)' },
  { id: 5, name: 'Deep Navy Abaya', price: 'AED 1,950', category: 'Classic', isNew: false, gradient: 'linear-gradient(160deg, #0d1020 0%, #1a1a30 50%, #0d1020 100%)' },
  { id: 6, name: 'Rose Dust Kaftan Abaya', price: 'AED 2,200', category: 'Printed', isNew: false, gradient: 'linear-gradient(160deg, #d4a0a0 0%, #e8c0b8 50%, #c09090 100%)' },
  { id: 7, name: 'Sage Linen Abaya', price: 'AED 1,600', category: 'Classic', isNew: false, gradient: 'linear-gradient(160deg, #8a9a80 0%, #a8b898 50%, #788a70 100%)' },
  { id: 8, name: 'Midnight Blossom Abaya', price: 'AED 2,950', category: 'Embroidered', isNew: true, gradient: 'linear-gradient(160deg, #0d0b18 0%, #1a1525 50%, #0d0b18 100%)' },
  { id: 9, name: 'Pearl Shimmer Abaya', price: 'AED 3,400', category: 'Embellished', isNew: false, gradient: 'linear-gradient(160deg, #e0d8d0 0%, #f0e8e0 50%, #d0c8c0 100%)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
}

export default function Abayas() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <main className="collection-page">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #0d0b08 0%, #1a1510 50%, #2d2218 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Timeless Elegance
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Abayas
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Heritage reimagined for the contemporary woman
          </motion.p>
        </div>
      </div>

      <div className="collection-body">
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div className="products-grid" layout>
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              className="product-card"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              layout
            >
              <div className="product-image" style={{ background: product.gradient }}>
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
                {product.isNew && <span className="product-badge">New</span>}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
