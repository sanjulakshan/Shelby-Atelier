import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import '../styles/Contact.css'

const contactInfo = [
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '+971 50 698 2268',
    href: 'tel:+971506982268',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'hello@shelbyatelier.ae',
    href: 'mailto:hello@shelbyatelier.ae',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Location',
    value: 'Dubai, United Arab Emirates',
    href: null,
  },
  {
    icon: <Clock size={22} />,
    label: 'Hours',
    value: 'Sun–Thu: 10am–7pm\nSat: 11am–5pm',
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
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
            Get in Touch
          </motion.span>
          <motion.h1
            style={{ color: 'var(--color-ivory)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,251,247,0.7)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We would love to hear from you
          </motion.p>
        </div>
      </div>

      <div className="contact-body">
        {/* Info Panel */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info-content">
            <span className="section-label">Find Us</span>
            <h2>We Are Here For You</h2>
            <p>
              Whether you have a question about our collections, wish to book a bespoke consultation, or simply want to say hello — we are always just a message away.
            </p>

            <div className="contact-details">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-detail">
                  <div className="detail-icon">{item.icon}</div>
                  <div className="detail-text">
                    <span className="detail-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="detail-value">{item.value}</a>
                    ) : (
                      <span className="detail-value" style={{ whiteSpace: 'pre-line' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <span className="social-label">Follow Us</span>
              <div className="social-links-row">
                <a href="https://instagram.com" aria-label="Instagram" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="social-link">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-placeholder">
            <span>Dubai, UAE</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="contact-form-section"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message Received</h3>
              <p>Thank you for reaching out. A member of our team will be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option>General Inquiry</option>
                      <option>Bespoke Consultation</option>
                      <option>Order Query</option>
                      <option>Press & Media</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </main>
  )
}
