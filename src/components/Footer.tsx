import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SHELBY ATELIER</h3>
            <p className="footer-description">
              Luxury couture fashion house based in Dubai, UAE. Specializing in elegant abayas, evening wear, and bespoke tailoring for the sophisticated woman.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" title="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Collections</h4>
            <ul className="footer-links">
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/abayas">Abayas</Link></li>
              <li><Link to="/evening-wear">Evening Wear</Link></li>
              <li><Link to="/resort-collection">Resort Collection</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><Link to="/bespoke-services">Bespoke Services</Link></li>
              <li><Link to="/lookbook">Lookbook</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-contact">
              <a href="tel:+971506982268" className="contact-item">
                <Phone size={16} />
                <span>+971 50 698 2268</span>
              </a>
              <a href="mailto:shelbydevelopmentsae@gmail.com" className="contact-item">
                <Mail size={16} />
                <span>hello@shelbyatelier.ae</span>
              </a>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Newsletter</h4>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <p className="footer-small">Get updates on new collections and exclusive offerings.</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Shelby Atelier. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Developed by <span className="credit-highlight">Shelby Developments</span>
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#shipping">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
