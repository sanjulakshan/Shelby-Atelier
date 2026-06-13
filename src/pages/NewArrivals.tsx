import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Abayas', 'Evening Wear', 'Resort', 'Accessories']

const products = [
  { id: 1, name: 'Midnight Silk Abaya', price: 'AED 2,400', category: 'Abayas', isNew: true, gradient: 'linear-gradient(160deg, #0d0b08 0%, #1a1510 50%, #0d0b08 100%)' },
  { id: 2, name: 'Golden Veil Kaftan', price: 'AED 3,800', category: 'Evening Wear', isNew: true, gradient: 'linear-gradient(160deg, #3d2b1f 0%, #5c3d28 50%, #2d1f12 100%)' },
  { id: 3, name: 'Pearl Embroidered Gown', price: 'AED 5,200', category: 'Evening Wear', isNew: true, gradient: 'linear-gradient(160deg, #2a2520 0%, #3d352e 50%, #1f1a16 100%)' },
  { id: 4, name: 'Linen Resort Dress', price: 'AED 1,650', category: 'Resort', isNew: true, gradient: 'linear-gradient(160deg, #c8b4a0 0%, #e8d8c8 50%, #b8a090 100%)' },
  { id: 5, name: 'Ivory Embossed Abaya', price: 'AED 2,800', category: 'Abayas', isNew: true, gradient: 'linear-gradient(160deg, #e8dcc8 0%, #f3e5d8 50%, #d4b8a8 100%)' },
  { id: 6, name: 'Champagne Evening Set', price: 'AED 4,100', category: 'Evening Wear', isNew: true, gradient: 'linear-gradient(160deg, #c8a870 0%, #e8c890 50%, #b89860 100%)' },
  { id: 7, name: 'Azure Resort Co-ord', price: 'AED 1,900', category: 'Resort', isNew: false, gradient: 'linear-gradient(160deg, #8090a8 0%, #a0b0c0 50%, #707890 100%)' },
  { id: 8, name: 'Onyx Crystal Abaya', price: 'AED 3,200', category: 'Abayas', isNew: true, gradient: 'linear-gradient(160deg, #1a1a2a 0%, #2d2d3d 50%, #1a1a2a 100%)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
}

export default function NewArrivals() {
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
            Just In
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            New Arrivals
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The latest additions to our curated collection
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
