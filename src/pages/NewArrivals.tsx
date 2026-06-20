import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Abayas', 'Evening Wear', 'Resort', 'Accessories']

const products = [
  { id: 1, name: 'Midnight Silk Abaya', price: 'AED 2,400', category: 'Abayas', isNew: true,
    image: 'https://images.unsplash.com/photo-1772474500365-c2c520545f44?w=400&h=550&fit=crop&q=80' },
  { id: 2, name: 'Golden Veil Kaftan', price: 'AED 3,800', category: 'Evening Wear', isNew: true,
    image: 'https://images.unsplash.com/photo-1774460699436-c408cc1408c3?w=400&h=550&fit=crop&q=80' },
  { id: 3, name: 'Pearl Embroidered Gown', price: 'AED 5,200', category: 'Evening Wear', isNew: true,
    image: 'https://images.unsplash.com/photo-1776841818478-16dbaba4001a?w=400&h=550&fit=crop&q=80' },
  { id: 4, name: 'Linen Resort Dress', price: 'AED 1,650', category: 'Resort', isNew: true,
    image: 'https://images.unsplash.com/photo-1767451629607-d368381d1e4c?w=400&h=550&fit=crop&q=80' },
  { id: 5, name: 'Ivory Embossed Abaya', price: 'AED 2,800', category: 'Abayas', isNew: true,
    image: 'https://images.unsplash.com/photo-1760083545495-b297b1690672?w=400&h=550&fit=crop&q=80' },
  { id: 6, name: 'Champagne Evening Set', price: 'AED 4,100', category: 'Evening Wear', isNew: true,
    image: 'https://images.unsplash.com/photo-1771774470158-2b18c74757f1?w=400&h=550&fit=crop&q=80' },
  { id: 7, name: 'Azure Resort Co-ord', price: 'AED 1,900', category: 'Resort', isNew: false,
    image: 'https://images.unsplash.com/photo-1759825413444-e7bd2dab7091?w=400&h=550&fit=crop&q=80' },
  { id: 8, name: 'Onyx Crystal Abaya', price: 'AED 3,200', category: 'Abayas', isNew: true,
    image: 'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?w=400&h=550&fit=crop&q=80' },
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
        <div className="page-hero-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,11,8,0.72), rgba(26,21,16,0.72)), url(https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=1920&h=800&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
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
              <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
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
