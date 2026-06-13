import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Gowns', 'Kaftans', 'Co-ords', 'Jumpsuits']

const products = [
  { id: 1, name: 'Golden Hour Gown', price: 'AED 5,800', category: 'Gowns', isNew: true, gradient: 'linear-gradient(160deg, #3d2b1f 0%, #5c3d28 50%, #2d1f12 100%)' },
  { id: 2, name: 'Pearl Embroidered Gown', price: 'AED 5,200', category: 'Gowns', isNew: true, gradient: 'linear-gradient(160deg, #2a2520 0%, #3d352e 50%, #1f1a16 100%)' },
  { id: 3, name: 'Golden Veil Kaftan', price: 'AED 3,800', category: 'Kaftans', isNew: true, gradient: 'linear-gradient(160deg, #c8a870 0%, #e8c890 50%, #b89860 100%)' },
  { id: 4, name: 'Champagne Silk Kaftan', price: 'AED 3,200', category: 'Kaftans', isNew: false, gradient: 'linear-gradient(160deg, #d4c8a8 0%, #e8dcc0 50%, #c4b898 100%)' },
  { id: 5, name: 'Noir Crystal Co-ord', price: 'AED 4,100', category: 'Co-ords', isNew: true, gradient: 'linear-gradient(160deg, #0d0b08 0%, #1a1510 50%, #0d0b08 100%)' },
  { id: 6, name: 'Burgundy Velvet Gown', price: 'AED 6,400', category: 'Gowns', isNew: false, gradient: 'linear-gradient(160deg, #3d0f0f 0%, #5c1a1a 50%, #2d0d0d 100%)' },
  { id: 7, name: 'Ivory Feather Trim Gown', price: 'AED 7,200', category: 'Gowns', isNew: false, gradient: 'linear-gradient(160deg, #e0d8d0 0%, #f0e8e0 50%, #d0c8c0 100%)' },
  { id: 8, name: 'Emerald Wrap Kaftan', price: 'AED 2,900', category: 'Kaftans', isNew: false, gradient: 'linear-gradient(160deg, #0f2d1a 0%, #1a3d28 50%, #0d2015 100%)' },
  { id: 9, name: 'Midnight Jumpsuit', price: 'AED 3,500', category: 'Jumpsuits', isNew: true, gradient: 'linear-gradient(160deg, #1a1a2a 0%, #2d2d3d 50%, #1a1a2a 100%)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
}

export default function EveningWear() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <main className="collection-page">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #2d1f12 0%, #1a1208 50%, #3d2b1f 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Luminous Nights
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Evening Wear
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafted to command every room you enter
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
