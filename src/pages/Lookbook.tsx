import { motion } from 'framer-motion'
import '../styles/Lookbook.css'

const looks = [
  { id: 1, title: 'Desert Dusk', subtitle: 'Look 01', gradient: 'linear-gradient(160deg, #1a1208 0%, #2d1f10 50%, #1a1208 100%)', size: 'tall' },
  { id: 2, title: 'Golden Hour', subtitle: 'Look 02', gradient: 'linear-gradient(160deg, #c8a870 0%, #e8c890 50%, #a89060 100%)', size: 'wide' },
  { id: 3, title: 'Midnight Bloom', subtitle: 'Look 03', gradient: 'linear-gradient(160deg, #0d0b18 0%, #1a1525 50%, #0d0b18 100%)', size: 'normal' },
  { id: 4, title: 'Ivory Reverie', subtitle: 'Look 04', gradient: 'linear-gradient(160deg, #e0d8d0 0%, #f5f0e8 50%, #d0c8c0 100%)', size: 'normal' },
  { id: 5, title: 'Ember Glow', subtitle: 'Look 05', gradient: 'linear-gradient(160deg, #3d1a08 0%, #5c2810 50%, #2d1208 100%)', size: 'tall' },
  { id: 6, title: 'Pearl Mist', subtitle: 'Look 06', gradient: 'linear-gradient(160deg, #c8c0b8 0%, #e0d8d0 50%, #b8b0a8 100%)', size: 'normal' },
  { id: 7, title: 'Obsidian Night', subtitle: 'Look 07', gradient: 'linear-gradient(160deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)', size: 'wide' },
  { id: 8, title: 'Saffron Dreams', subtitle: 'Look 08', gradient: 'linear-gradient(160deg, #c87020 0%, #e09040 50%, #b86010 100%)', size: 'normal' },
  { id: 9, title: 'Sage Garden', subtitle: 'Look 09', gradient: 'linear-gradient(160deg, #4a5a40 0%, #6a7a58 50%, #3a4a30 100%)', size: 'tall' },
  { id: 10, title: 'Azure Horizon', subtitle: 'Look 10', gradient: 'linear-gradient(160deg, #1a2d3d 0%, #283d52 50%, #1a2030 100%)', size: 'normal' },
  { id: 11, title: 'Rose Quartz', subtitle: 'Look 11', gradient: 'linear-gradient(160deg, #d4a0a0 0%, #e8c0b8 50%, #c09090 100%)', size: 'normal' },
  { id: 12, title: 'Champagne Toast', subtitle: 'Look 12', gradient: 'linear-gradient(160deg, #d4c8a8 0%, #e8dcb8 50%, #c4b898 100%)', size: 'wide' },
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
            <div className="look-image" style={{ background: look.gradient }}>
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
