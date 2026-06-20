import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Dresses', 'Co-ords', 'Tops', 'Cover-Ups']

const products = [
  { id: 1, name: 'Linen Resort Dress', price: 'AED 1,650', category: 'Dresses', isNew: true,
    image: 'https://images.unsplash.com/photo-1767451629607-d368381d1e4c?w=400&h=550&fit=crop&q=80' },
  { id: 2, name: 'Azure Resort Co-ord', price: 'AED 1,900', category: 'Co-ords', isNew: false,
    image: 'https://images.unsplash.com/photo-1759825413444-e7bd2dab7091?w=400&h=550&fit=crop&q=80' },
  { id: 3, name: 'Saffron Silk Dress', price: 'AED 2,100', category: 'Dresses', isNew: true,
    image: 'https://images.unsplash.com/photo-1773777498906-bfd9f2271ee1?w=400&h=550&fit=crop&q=80' },
  { id: 4, name: 'White Eyelet Cover-Up', price: 'AED 980', category: 'Cover-Ups', isNew: false,
    image: 'https://images.unsplash.com/photo-1777545151770-000221c89fde?w=400&h=550&fit=crop&q=80' },
  { id: 5, name: 'Terracotta Wrap Dress', price: 'AED 1,750', category: 'Dresses', isNew: true,
    image: 'https://images.unsplash.com/photo-1763559038700-a4dd423bafba?w=400&h=550&fit=crop&q=80' },
  { id: 6, name: 'Aqua Silk Co-ord', price: 'AED 2,200', category: 'Co-ords', isNew: false,
    image: 'https://images.unsplash.com/photo-1759825413442-dfcd3449d061?w=400&h=550&fit=crop&q=80' },
  { id: 7, name: 'Blush Printed Top', price: 'AED 650', category: 'Tops', isNew: false,
    image: 'https://images.unsplash.com/photo-1767440398636-eb35f46bb342?w=400&h=550&fit=crop&q=80' },
  { id: 8, name: 'Ivory Crochet Cover-Up', price: 'AED 1,100', category: 'Cover-Ups', isNew: true,
    image: 'https://images.unsplash.com/photo-1776633734208-3cdf89a7fbf0?w=400&h=550&fit=crop&q=80' },
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
