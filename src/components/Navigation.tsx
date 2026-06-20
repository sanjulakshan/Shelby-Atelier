import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingBag, Search, ArrowRight } from 'lucide-react'
import '../styles/Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

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

  // Focus search input when overlay opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }
  }, [searchOpen])

  // Close overlays on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setCartOpen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll when overlays open
  useEffect(() => {
    document.body.style.overflow = (searchOpen || cartOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [searchOpen, cartOpen])

  return (
    <>
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
            <button
              className="nav-icon-btn"
              aria-label="Search"
              onClick={() => { setSearchOpen(true); setCartOpen(false) }}
            >
              <Search size={20} />
            </button>
            <button
              className="nav-icon-btn"
              aria-label="Shopping Bag"
              onClick={() => { setCartOpen(true); setSearchOpen(false) }}
            >
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

      {/* Search Overlay */}
      <div className={`search-overlay ${searchOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}>
        <button className="search-close-btn" onClick={() => setSearchOpen(false)} aria-label="Close search">
          <X size={24} />
        </button>
        <div className="search-overlay-inner">
          <span className="search-label">Search</span>
          <div className="search-input-row">
            <input
              ref={searchInputRef}
              className="search-input"
              type="text"
              placeholder="Search collections, pieces…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') setSearchOpen(false) }}
            />
            <button className="search-submit-btn" aria-label="Submit search" onClick={() => setSearchOpen(false)}>
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <div className={`cart-overlay ${cartOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setCartOpen(false) }}>
        <div className="cart-drawer">
          <div className="cart-drawer-header">
            <span className="cart-drawer-title">Your Bag</span>
            <button className="cart-close-btn" onClick={() => setCartOpen(false)} aria-label="Close cart">
              <X size={22} />
            </button>
          </div>
          <div className="cart-drawer-body">
            <ShoppingBag size={48} className="cart-empty-icon" />
            <p className="cart-empty-title">Your bag is empty</p>
            <p className="cart-empty-subtitle">Discover our latest collections and add your favourites.</p>
          </div>
          <div className="cart-drawer-footer">
            <Link to="/new-arrivals" className="cart-shop-btn" onClick={() => setCartOpen(false)}>
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
