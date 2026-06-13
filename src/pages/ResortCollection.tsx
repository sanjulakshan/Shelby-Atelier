import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Dresses', 'Co-ords', 'Tops', 'Cover-Ups']

const products = [
  { id: 1, name: 'Linen Resort Dress', price: 'AED 1,650', category: 'Dresses', isNew: true, gradient: 'linear-gradient(160deg, #c8b4a0 0%, #e8d8c8 50%, #b8a090 100%)' },
  { id: 2, name: 'Azure Resort Co-ord', price: 'AED 1,900', category: 'Co-ords', isNew: false, gradient: 'linear-gradient(160deg, #8090a8 0%, #a0b0c0 50%, #707890 100%)' },
  { id: 3, name: 'Saffron Silk Dress', price: 'AED 2,100', category: 'Dresses', isNew: true, gradient: 'linear-gradient(160deg, #c87020 0%, #e09040 50%, #b86010 100%)' },
  { id: 4, name: 'White Eyelet Cover-Up', price: 'AED 980', category: 'Cover-Ups', isNew: false, gradient: 'linear-gradient(160deg, #f0ede8 0%, #faf8f4 50%, #e0ddd8 100%)' },
  { id: 5, name: 'Terracotta Wrap Dress', price: 'AED 1,750', category: 'Dresses', isNew: true, gradient: 'linear-gradient(160deg, #a04030 0%, #c05040 50%, #903020 100%)' },
  { id: 6, name: 'Aqua Silk Co-ord', price: 'AED 2,200', category: 'Co-ords', isNew: false, gradient: 'linear-gradient(160deg, #50a090 0%, #70c0b0 50%, #408070 100%)' },
  { id: 7, name: 'Blush Printed Top', price: 'AED 650', category: 'Tops', isNew: false, gradient: 'linear-gradient(160deg, #e8b0c0 0%, #f8d0d8 50%, #d8a0b0 100%)' },
  { id: 8, name: 'Ivory Crochet Cover-Up', price: 'AED 1,100', category: 'Cover-Ups', isNew: true, gradient: 'linear-gradient(160deg, #e8e0d8 0%, #f8f0e8 50%, #d8d0c8 100%)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
}

export default function ResortCollection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <main className="collection-page">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #c8b4a0 0%, #d4c0a8 40%, #b8a090 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'rgba(26,26,26,0.6)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Sun-kissed Luxury
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-black)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Resort Collection
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(26,26,26,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Effortless luxury for sun-drenched destinations
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
