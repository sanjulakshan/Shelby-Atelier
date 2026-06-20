import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import '../styles/Collections.css'

const collections = [
  {
    title: 'Abayas',
    description: 'Timeless silhouettes crafted in the finest silks, crepes, and embroidered fabrics. Each abaya is a testament to cultural heritage reimagined for the contemporary woman.',
    path: '/abayas',
    count: '24 pieces',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=1000&fit=crop&q=80',
    accent: 'rgba(212,175,55,0.1)',
  },
  {
    title: 'Evening Wear',
    description: 'Gowns and kaftans designed to command attention. Intricate beadwork, flowing silhouettes, and luxurious fabrics come together for moments that demand presence.',
    path: '/evening-wear',
    count: '18 pieces',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop&q=80',
    accent: 'rgba(200,180,140,0.1)',
  },
  {
    title: 'Resort Collection',
    description: 'Effortless luxury for sun-drenched destinations. Lightweight silks, breezy linens, and vibrant prints made for the woman who travels in style.',
    path: '/resort-collection',
    count: '15 pieces',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=1000&fit=crop&q=80',
    accent: 'rgba(180,160,140,0.2)',
  },
  {
    title: 'Bespoke Services',
    description: 'Your vision, our craft. Work one-on-one with our master designers to create a garment that is uniquely and entirely yours — from first sketch to final fitting.',
    path: '/bespoke-services',
    count: 'Custom',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=1000&fit=crop&q=80',
    accent: 'rgba(212,175,55,0.15)',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } }),
}

export default function Collections() {
  return (
    <main className="collections-page">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'linear-gradient(rgba(13,11,8,0.72), rgba(26,21,16,0.72)), url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=800&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Universe
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Collections
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the worlds we have created for you
          </motion.p>
        </div>
      </div>

      <div className="collections-body">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            className={`collection-feature ${i % 2 === 1 ? 'reverse' : ''}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="collection-visual" style={{ backgroundImage: `url(${col.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="collection-visual-inner" style={{ background: col.accent }} />
              <span className="collection-count">{col.count}</span>
            </div>
            <div className="collection-details">
              <span className="section-label">Collection</span>
              <h2>{col.title}</h2>
              <p>{col.description}</p>
              <Link to={col.path} className="collection-cta">
                Explore {col.title} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
