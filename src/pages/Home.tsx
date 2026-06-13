import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import '../styles/Home.css'

const categories = [
  { title: 'Abayas', subtitle: 'Timeless Elegance', path: '/abayas', accent: '#d4af37' },
  { title: 'Evening Wear', subtitle: 'Luminous Nights', path: '/evening-wear', accent: '#c8b4a0' },
  { title: 'Resort', subtitle: 'Sun-kissed Luxury', path: '/resort-collection', accent: '#b8a898' },
  { title: 'Bespoke', subtitle: 'Made For You', path: '/bespoke-services', accent: '#d4af37' },
]

const newArrivals = [
  { id: 1, name: 'Midnight Silk Abaya', price: 'AED 2,400', category: 'Abayas', gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' },
  { id: 2, name: 'Golden Veil Kaftan', price: 'AED 3,800', category: 'Evening Wear', gradient: 'linear-gradient(135deg, #3d2b1f 0%, #5c3d28 50%, #2d1f12 100%)' },
  { id: 3, name: 'Pearl Embroidered Gown', price: 'AED 5,200', category: 'Evening Wear', gradient: 'linear-gradient(135deg, #2a2520 0%, #3d352e 50%, #1f1a16 100%)' },
  { id: 4, name: 'Linen Resort Dress', price: 'AED 1,650', category: 'Resort', gradient: 'linear-gradient(135deg, #c8b4a0 0%, #e8d8c8 50%, #b8a090 100%)' },
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
                <div className="category-image" style={{ '--accent': cat.accent } as React.CSSProperties} />
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
              <div className="arrival-image" style={{ background: item.gradient }}>
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
