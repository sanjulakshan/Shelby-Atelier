import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Classic', 'Embroidered', 'Printed', 'Embellished']

const products = [
  { id: 1, name: 'Midnight Classic Abaya', price: 'AED 1,800', category: 'Classic', isNew: false,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=550&fit=crop&q=80' },
  { id: 2, name: 'Gold Thread Abaya', price: 'AED 2,600', category: 'Embroidered', isNew: true,
    image: 'https://images.unsplash.com/photo-1772474500365-c2c520545f44?w=400&h=550&fit=crop&q=80' },
  { id: 3, name: 'Onyx Crystal Abaya', price: 'AED 3,200', category: 'Embellished', isNew: true,
    image: 'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?w=400&h=550&fit=crop&q=80' },
  { id: 4, name: 'Ivory Embossed Abaya', price: 'AED 2,800', category: 'Embellished', isNew: true,
    image: 'https://images.unsplash.com/photo-1760083545495-b297b1690672?w=400&h=550&fit=crop&q=80' },
  { id: 5, name: 'Deep Navy Abaya', price: 'AED 1,950', category: 'Classic', isNew: false,
    image: 'https://images.unsplash.com/photo-1728487235101-664d87965931?w=400&h=550&fit=crop&q=80' },
  { id: 6, name: 'Rose Dust Kaftan Abaya', price: 'AED 2,200', category: 'Printed', isNew: false,
    image: 'https://images.unsplash.com/photo-1752794673269-dc356838c5fd?w=400&h=550&fit=crop&q=80' },
  { id: 7, name: 'Sage Linen Abaya', price: 'AED 1,600', category: 'Classic', isNew: false,
    image: 'https://images.unsplash.com/photo-1762376128087-bc29c6df08c0?w=400&h=550&fit=crop&q=80' },
  { id: 8, name: 'Midnight Blossom Abaya', price: 'AED 2,950', category: 'Embroidered', isNew: true,
    image: 'https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=400&h=550&fit=crop&q=80' },
  { id: 9, name: 'Pearl Shimmer Abaya', price: 'AED 3,400', category: 'Embellished', isNew: false,
    image: 'https://images.unsplash.com/photo-1736342182213-6c037467cb38?w=400&h=550&fit=crop&q=80' },
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
        <div className="page-hero-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,11,8,0.72), rgba(26,21,16,0.72)), url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&h=800&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
