import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CollectionPage.css'

const filters = ['All', 'Gowns', 'Kaftans', 'Co-ords', 'Jumpsuits']

const products = [
  { id: 1, name: 'Golden Hour Gown', price: 'AED 5,800', category: 'Gowns', isNew: true,
    image: 'https://images.unsplash.com/photo-1771774470158-2b18c74757f1?w=400&h=550&fit=crop&q=80' },
  { id: 2, name: 'Pearl Embroidered Gown', price: 'AED 5,200', category: 'Gowns', isNew: true,
    image: 'https://images.unsplash.com/photo-1776841818478-16dbaba4001a?w=400&h=550&fit=crop&q=80' },
  { id: 3, name: 'Golden Veil Kaftan', price: 'AED 3,800', category: 'Kaftans', isNew: true,
    image: 'https://images.unsplash.com/photo-1774460699436-c408cc1408c3?w=400&h=550&fit=crop&q=80' },
  { id: 4, name: 'Champagne Silk Kaftan', price: 'AED 3,200', category: 'Kaftans', isNew: false,
    image: 'https://images.unsplash.com/photo-1776841818483-700f88aace44?w=400&h=550&fit=crop&q=80' },
  { id: 5, name: 'Noir Crystal Co-ord', price: 'AED 4,100', category: 'Co-ords', isNew: true,
    image: 'https://images.unsplash.com/photo-1764998112680-2f617dc9be40?w=400&h=550&fit=crop&q=80' },
  { id: 6, name: 'Burgundy Velvet Gown', price: 'AED 6,400', category: 'Gowns', isNew: false,
    image: 'https://images.unsplash.com/photo-1770045517872-73c5301fa137?w=400&h=550&fit=crop&q=80' },
  { id: 7, name: 'Ivory Feather Trim Gown', price: 'AED 7,200', category: 'Gowns', isNew: false,
    image: 'https://images.unsplash.com/photo-1756483492038-974f2a2ff341?w=400&h=550&fit=crop&q=80' },
  { id: 8, name: 'Emerald Wrap Kaftan', price: 'AED 2,900', category: 'Kaftans', isNew: false,
    image: 'https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?w=400&h=550&fit=crop&q=80' },
  { id: 9, name: 'Midnight Jumpsuit', price: 'AED 3,500', category: 'Jumpsuits', isNew: true,
    image: 'https://images.unsplash.com/photo-1776841819019-999c928d9928?w=400&h=550&fit=crop&q=80' },
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
        <div className="page-hero-bg" style={{ backgroundImage: 'linear-gradient(rgba(26,18,8,0.72), rgba(45,31,18,0.72)), url(https://images.unsplash.com/photo-1776841818483-700f88aace44?w=1920&h=800&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center top' }} />
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
