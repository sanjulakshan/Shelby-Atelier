import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Pen, Scissors, Star, Calendar } from 'lucide-react'
import '../styles/BespokeServices.css'

const steps = [
  {
    icon: <Calendar size={32} />,
    step: '01',
    title: 'Consultation',
    description: 'Begin with a private one-on-one appointment with our head designer. Share your vision, occasion, and personal style. We listen intently.',
  },
  {
    icon: <Pen size={32} />,
    step: '02',
    title: 'Design & Sketch',
    description: 'Our designers create bespoke sketches tailored to your vision. Fabric swatches and embellishment options are presented for your approval.',
  },
  {
    icon: <Scissors size={32} />,
    step: '03',
    title: 'Master Crafting',
    description: 'Your garment is meticulously crafted by our expert artisans. Every seam, every bead, every stitch executed with absolute precision.',
  },
  {
    icon: <Star size={32} />,
    step: '04',
    title: 'Final Fitting',
    description: 'Experience your creation for the first time. Final adjustments ensure a perfect fit. Your piece is ready to make its entrance.',
  },
]

const offerings = [
  {
    title: 'Bridal Couture',
    description: 'Bespoke wedding abayas, gowns, and traditional ensembles designed exclusively for your most important day.',
    price: 'From AED 8,000',
    timeline: '8–12 weeks',
  },
  {
    title: 'Evening Masterpiece',
    description: 'A one-of-a-kind evening gown or kaftan crafted for galas, award ceremonies, and private gatherings.',
    price: 'From AED 5,000',
    timeline: '6–8 weeks',
  },
  {
    title: 'Signature Abaya',
    description: 'Your own signature abaya — personalized fabric, embroidery, and embellishment chosen just for you.',
    price: 'From AED 2,500',
    timeline: '4–6 weeks',
  },
  {
    title: 'Complete Wardrobe',
    description: 'An ongoing relationship where we curate and craft a full seasonal wardrobe aligned with your lifestyle.',
    price: 'Bespoke pricing',
    timeline: 'Ongoing',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } }),
}

export default function BespokeServices() {
  return (
    <main className="bespoke-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #1a1510 0%, #2d2218 40%, #1a1510 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Made For You
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bespoke Services
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where your vision becomes wearable art
          </motion.p>
        </div>
      </div>

      {/* Intro */}
      <section className="bespoke-intro">
        <motion.div
          className="bespoke-intro-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">The Experience</span>
          <h2>Beyond Ready-to-Wear</h2>
          <p>
            Bespoke at Shelby Atelier is more than a service — it is a deeply personal journey. From the first conversation to the final stitch, every element of your garment is considered with care, intention, and an unwavering commitment to excellence.
          </p>
          <p>
            We believe every woman deserves to wear something that was made entirely, exclusively for her.
          </p>
        </motion.div>
        <motion.div
          className="bespoke-intro-visual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&h=900&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </section>

      {/* Process */}
      <section className="bespoke-process">
        <motion.div
          className="bespoke-process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">How It Works</span>
          <h2>The Process</h2>
        </motion.div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="process-step"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="bespoke-offerings">
        <motion.div
          className="bespoke-offerings-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Our Offerings</span>
          <h2>What We Create</h2>
        </motion.div>
        <div className="offerings-grid">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              className="offering-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="offering-title">{item.title}</h3>
              <p className="offering-desc">{item.description}</p>
              <div className="offering-meta">
                <span className="offering-price">{item.price}</span>
                <span className="offering-timeline">{item.timeline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bespoke-cta">
        <div className="bespoke-cta-bg" />
        <motion.div
          className="bespoke-cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label" style={{ color: 'var(--color-gold)' }}>Begin Your Journey</span>
          <h2 style={{ color: 'var(--color-ivory)' }}>Ready to Create Something Extraordinary?</h2>
          <p style={{ color: 'rgba(255,251,247,0.75)' }}>
            Schedule a private consultation with our design team. We accept a limited number of bespoke clients each season to ensure every piece receives our full attention.
          </p>
          <Link to="/contact" className="btn-primary-light">
            Book a Consultation
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
