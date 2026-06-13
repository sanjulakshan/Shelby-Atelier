import { motion } from 'framer-motion'
import '../styles/About.css'

const values = [
  {
    title: 'Craftsmanship',
    description: 'Every garment is made by hand with an obsessive attention to detail. We believe slow fashion is the only fashion worth making.',
  },
  {
    title: 'Heritage',
    description: 'We draw inspiration from the rich textile traditions of the Arab world, reinterpreted through a contemporary lens.',
  },
  {
    title: 'Sustainability',
    description: 'We source only ethically produced fabrics and work with artisans who are fairly compensated for their expertise.',
  },
  {
    title: 'Individuality',
    description: 'No two women are the same, and no two pieces should be either. We celebrate uniqueness above all else.',
  },
]

const team = [
  {
    name: 'Shelby Al Hassan',
    role: 'Founder & Creative Director',
    bio: 'With a background in couture from Paris and roots in Dubai, Shelby established the atelier in 2014 to bridge cultures through fashion.',
    gradient: 'linear-gradient(160deg, #1a1510 0%, #2d2218 50%, #1a1510 100%)',
  },
  {
    name: 'Nour Khalid',
    role: 'Head of Design',
    bio: 'A graduate of Central Saint Martins, Nour brings a global perspective to every collection — always filtered through a deeply personal aesthetic.',
    gradient: 'linear-gradient(160deg, #2d2218 0%, #3d2d20 50%, #2d2218 100%)',
  },
  {
    name: 'Fatima Al Rashid',
    role: 'Master Atelier — Embroidery',
    bio: 'With over 20 years of hand-embroidery expertise, Fatima is the soul behind the intricate details that define Shelby Atelier\'s signature pieces.',
    gradient: 'linear-gradient(160deg, #0d0b08 0%, #1a1510 50%, #0d0b08 100%)',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } }),
}

export default function About() {
  return (
    <main className="about-page">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ background: 'linear-gradient(135deg, #0d0b08 0%, #1a1510 50%, #2d2218 100%)' }} />
        <div className="page-hero-content">
          <motion.span
            className="section-label"
            style={{ color: 'var(--color-gold)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Born in Dubai. Worn worldwide.
          </motion.p>
        </div>
      </div>

      {/* Brand Story */}
      <section className="about-story">
        <motion.div
          className="about-story-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />
        <motion.div
          className="about-story-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="section-label">The Beginning</span>
          <h2>A Vision Born from Two Worlds</h2>
          <p>
            Shelby Atelier was founded in 2014 in the heart of Dubai with a singular, deeply held belief: that a woman should never have to choose between her cultural identity and her personal style. That modesty and beauty are not opposites — they are partners.
          </p>
          <p>
            What began in a small studio in Jumeirah has grown into an internationally recognised couture house, serving women across the GCC and beyond. Yet we have never lost sight of our founding principle: every woman deserves to feel extraordinary.
          </p>
          <p>
            Today, Shelby Atelier operates from our flagship atelier in Dubai, with bespoke consultations available by appointment. Each collection is conceived, designed, and crafted entirely in-house, ensuring complete control over quality and artistry.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="about-values">
        <motion.div
          className="about-values-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What We Believe</span>
          <h2>Our Values</h2>
        </motion.div>
        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="value-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="value-number">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="about-quote">
        <div className="about-quote-bg" />
        <motion.blockquote
          className="about-quote-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>"Fashion is not about what you wear. It is about what you feel when you wear it — and how the world sees you when you walk into a room."</p>
          <cite>— Shelby Al Hassan, Founder</cite>
        </motion.blockquote>
      </section>

      {/* Team */}
      <section className="about-team">
        <motion.div
          className="about-team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">The People</span>
          <h2>The Creative Team</h2>
        </motion.div>
        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="team-portrait" style={{ background: member.gradient }}>
                <div className="team-portrait-overlay" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
