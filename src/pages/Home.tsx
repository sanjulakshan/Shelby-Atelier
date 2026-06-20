import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import '../styles/Home.css'

const categories = [
  { title: 'Abayas', subtitle: 'Timeless Elegance', path: '/abayas', accent: 'rgba(212,175,55,0.18)',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop&q=80' },
  { title: 'Evening Wear', subtitle: 'Luminous Nights', path: '/evening-wear', accent: 'rgba(200,180,160,0.15)',
    image: 'https://images.unsplash.com/photo-1776841818483-700f88aace44?w=600&h=800&fit=crop&q=80' },
  { title: 'Resort', subtitle: 'Sun-kissed Luxury', path: '/resort-collection', accent: 'rgba(184,168,152,0.15)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop&q=80' },
  { title: 'Bespoke', subtitle: 'Made For You', path: '/bespoke-services', accent: 'rgba(212,175,55,0.18)',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=800&fit=crop&q=80' },
]

const newArrivals = [
  { id: 1, name: 'Midnight Silk Abaya', price: 'AED 2,400', category: 'Abayas',
    image: 'https://images.unsplash.com/photo-1772474500365-c2c520545f44?w=400&h=550&fit=crop&q=80' },
  { id: 2, name: 'Golden Veil Kaftan', price: 'AED 3,800', category: 'Evening Wear',
    image: 'https://images.unsplash.com/photo-1774460699436-c408cc1408c3?w=400&h=550&fit=crop&q=80' },
  { id: 3, name: 'Pearl Embroidered Gown', price: 'AED 5,200', category: 'Evening Wear',
    image: 'https://images.unsplash.com/photo-1776841818478-16dbaba4001a?w=400&h=550&fit=crop&q=80' },
  { id: 4, name: 'Linen Resort Dress', price: 'AED 1,650', category: 'Resort',
    image: 'https://images.unsplash.com/photo-1767451629607-d368381d1e4c?w=400&h=550&fit=crop&q=80' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1772474587292-08b3e8932acd?w=1920&h=1080&fit=crop&q=80"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <motion.p
            className="hero-pretitle"
            initial={{ opacity: 0, letterSpacing: '6px' }}
            animate={{ opacity: 1, letterSpacing: '10px' }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Dubai Luxury Couture
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where Elegance<br />Meets Artistry
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Crafted for the sophisticated woman who commands presence
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/collections" className="btn-primary">
              Explore Collections
            </Link>
            <Link to="/bespoke-services" className="btn-ghost">
              Bespoke Services
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="hero-scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Category Showcase */}
      <section className="categories-section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">Our World</span>
          <h2>The Collections</h2>
          <p>Each piece tells a story of craftsmanship and feminine grace</p>
        </motion.div>
        <motion.div
          className="categories-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={fadeUp}>
              <Link to={cat.path} className="category-card">
                <div className="category-image" style={{ '--accent': cat.accent, backgroundImage: `url(${cat.image})`, backgroundSize: 'cover', backgroundPosition: 'center top' } as React.CSSProperties} />
                <div className="category-info">
                  <p className="category-subtitle">{cat.subtitle}</p>
                  <h3 className="category-title">{cat.title}</h3>
                  <span className="category-link">
                    Explore <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New Arrivals Preview */}
      <section className="arrivals-section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-label">Just In</span>
          <h2>New Arrivals</h2>
          <p>The latest additions to our curated collection</p>
        </motion.div>
        <motion.div
          className="arrivals-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {newArrivals.map((item) => (
            <motion.div key={item.id} className="arrival-card" variants={fadeUp}>
              <div className="arrival-image" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                <div className="arrival-image-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
                <span className="arrival-badge">New</span>
              </div>
              <div className="arrival-info">
                <span className="arrival-category">{item.category}</span>
                <h4 className="arrival-name">{item.name}</h4>
                <p className="arrival-price">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="section-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link to="/new-arrivals" className="btn-outline">
            View All New Arrivals <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="brand-story">
        <motion.div
          className="brand-story-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1753162657110-753418a3840b?w=700&h=900&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <motion.div
          className="brand-story-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp}>Our Story</motion.span>
          <motion.h2 variants={fadeUp}>Born in Dubai,<br />Worn Worldwide</motion.h2>
          <motion.p variants={fadeUp}>
            Shelby Atelier was founded with a singular vision — to create fashion that honors the modern Arab woman while embracing a global aesthetic. Every stitch reflects our commitment to excellence, every silhouette our reverence for beauty.
          </motion.p>
          <motion.p variants={fadeUp}>
            From our atelier in Dubai, we craft pieces that transcend trends. Each garment is a collaboration between our master artisans and the women who wear them, resulting in creations that feel intimately personal.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/about" className="btn-outline">
              Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Lookbook Teaser */}
      <section className="lookbook-teaser">
        <div className="lookbook-bg" />
        <motion.div
          className="lookbook-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span className="section-label" variants={fadeUp} style={{ color: 'rgba(255,251,247,0.7)' }}>
            SS 2025
          </motion.span>
          <motion.h2 variants={fadeUp} style={{ color: 'var(--color-ivory)' }}>
            The Lookbook
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: 'rgba(255,251,247,0.8)' }}>
            A visual journey through our latest season — where light, fabric, and form converge in harmony.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/lookbook" className="btn-primary">
              View Lookbook <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        {[
          { value: '10+', label: 'Years of Couture' },
          { value: '500+', label: 'Bespoke Pieces' },
          { value: '30+', label: 'Countries Served' },
          { value: '100%', label: 'Handcrafted' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
