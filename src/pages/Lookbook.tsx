import { motion } from 'framer-motion'
import '../styles/Lookbook.css'

const looks = [
  { id: 1, title: 'Desert Dusk', subtitle: 'Look 01', size: 'tall',
    image: 'https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=600&h=900&fit=crop&q=80' },
  { id: 2, title: 'Golden Hour', subtitle: 'Look 02', size: 'wide',
    image: 'https://images.unsplash.com/photo-1776841818483-700f88aace44?w=900&h=600&fit=crop&q=80' },
  { id: 3, title: 'Midnight Bloom', subtitle: 'Look 03', size: 'normal',
    image: 'https://images.unsplash.com/photo-1764998112680-2f617dc9be40?w=600&h=700&fit=crop&q=80' },
  { id: 4, title: 'Ivory Reverie', subtitle: 'Look 04', size: 'normal',
    image: 'https://images.unsplash.com/photo-1760083545495-b297b1690672?w=600&h=700&fit=crop&q=80' },
  { id: 5, title: 'Ember Glow', subtitle: 'Look 05', size: 'tall',
    image: 'https://images.unsplash.com/photo-1774460699436-c408cc1408c3?w=600&h=900&fit=crop&q=80' },
  { id: 6, title: 'Pearl Mist', subtitle: 'Look 06', size: 'normal',
    image: 'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?w=600&h=700&fit=crop&q=80' },
  { id: 7, title: 'Obsidian Night', subtitle: 'Look 07', size: 'wide',
    image: 'https://images.unsplash.com/photo-1771774470158-2b18c74757f1?w=900&h=600&fit=crop&q=80' },
  { id: 8, title: 'Saffron Dreams', subtitle: 'Look 08', size: 'normal',
    image: 'https://images.unsplash.com/photo-1773777498906-bfd9f2271ee1?w=600&h=700&fit=crop&q=80' },
  { id: 9, title: 'Sage Garden', subtitle: 'Look 09', size: 'tall',
    image: 'https://images.unsplash.com/photo-1752794673269-dc356838c5fd?w=600&h=900&fit=crop&q=80' },
  { id: 10, title: 'Azure Horizon', subtitle: 'Look 10', size: 'normal',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=700&fit=crop&q=80' },
  { id: 11, title: 'Rose Quartz', subtitle: 'Look 11', size: 'normal',
    image: 'https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?w=600&h=700&fit=crop&q=80' },
  { id: 12, title: 'Champagne Toast', subtitle: 'Look 12', size: 'wide',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&h=600&fit=crop&q=80' },
]

export default function Lookbook() {
  return (
    <main className="lookbook-page">
      <div className="page-hero" style={{ height: '55vh' }}>
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #0d0b08 0%, #1a1510 50%, #2d2218 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            SS 2025
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Lookbook
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A visual journey through our Spring/Summer 2025 collection
          </motion.p>
        </div>
      </div>

      <div className="lookbook-intro">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          "This season, we explore the dialogue between light and shadow, desert warmth and ocean cool. Each look is a poem."
        </motion.p>
        <motion.span
          className="lookbook-author"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          — Shelby, Creative Director
        </motion.span>
      </div>

      <div className="lookbook-grid">
        {looks.map((look, i) => (
          <motion.div
            key={look.id}
            className={`look-item look-${look.size}`}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.04 }}
          >
            <div className="look-image" style={{ backgroundImage: `url(${look.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="look-overlay">
                <span className="look-subtitle">{look.subtitle}</span>
                <h3 className="look-title">{look.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
