import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Collections', path: '/collections' },
    { name: 'Abayas', path: '/abayas' },
    { name: 'Evening Wear', path: '/evening-wear' },
    { name: 'Resort', path: '/resort-collection' },
    { name: 'Bespoke', path: '/bespoke-services' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Journal', path: '/journal' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">SHELBY</span>
          <span className="logo-subtext">ATELIER</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-icons">
          <button className="nav-icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="nav-icon-btn" aria-label="Shopping Bag">
            <ShoppingBag size={20} />
          </button>
          <button
            className="nav-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
