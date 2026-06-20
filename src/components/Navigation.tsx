import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'
import '../styles/Navigation.css'
import { searchData, type SearchItem } from '../data/searchData'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

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

  // Filter results
  const results = useMemo<SearchItem[]>(() => {
    const q = searchQuery.trim().toLowerCase()
    if (q.length < 2) return []
    return searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    ).slice(0, 12)
  }, [searchQuery])

  // Group results by category
  const grouped = useMemo(() => {
    const map: Record<string, SearchItem[]> = {}
    for (const item of results) {
      if (!map[item.category]) map[item.category] = []
      map[item.category].push(item)
    }
    return map
  }, [results])

  // Focus search input when overlay opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    } else {
      setSearchQuery('')
    }
  }, [searchOpen])

  // Close overlays on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSearchOpen(false); setCartOpen(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll when overlays open
  useEffect(() => {
    document.body.style.overflow = (searchOpen || cartOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [searchOpen, cartOpen])

  const handleResultClick = (path: string) => {
    setSearchOpen(false)
    navigate(path)
  }

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
      <div
        className={`search-overlay ${searchOpen ? 'active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false) }}
      >
        <button className="search-close-btn" onClick={() => setSearchOpen(false)} aria-label="Close search">
          <X size={24} />
        </button>
        <div className="search-overlay-inner">
          <span className="search-label">Search</span>
          <div className="search-input-row">
            <Search size={18} style={{ color: 'rgba(26,26,26,0.3)', flexShrink: 0 }} />
            <input
              ref={searchInputRef}
              className="search-input"
              type="text"
              placeholder="Search pieces, collections, journal…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-submit-btn" aria-label="Clear" onClick={() => setSearchQuery('')}>
                <X size={18} />
              </button>
            )}
          </div>

          {/* Results */}
          {searchQuery.length >= 2 && (
            <div className="search-results">
              {results.length === 0 ? (
                <p className="search-no-results">No results for "{searchQuery}"</p>
              ) : (
                Object.entries(grouped).map(([category, items]) => (
                  <div key={category} className="search-result-group">
                    <p className="search-result-group-label">{category}</p>
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="search-result-item"
                        onClick={() => handleResultClick(item.path)}
                      >
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="search-result-thumb"
                          />
                        )}
                        <div className="search-result-info">
                          <span className="search-result-title">{item.title}</span>
                          <div className="search-result-meta">
                            <span className="search-result-category">{item.category}</span>
                            {item.price && (
                              <span className="search-result-price">{item.price}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          )}

          {searchQuery.length < 2 && (
            <p className="search-hint">Type at least 2 characters to search</p>
          )}
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className={`cart-overlay ${cartOpen ? 'active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setCartOpen(false) }}
      >
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
