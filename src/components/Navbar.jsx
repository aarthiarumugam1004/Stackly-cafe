import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const searchInputRef = useRef(null)
  const navigate = useNavigate()
  const { cartCount } = useCart()
  const { user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = searchText.trim()
    setSearchOpen(false)
    setMobileOpen(false)
    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`)
    } else {
      navigate('/products')
    }
  }

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setMobileOpen(false)}
            aria-label="Stackly Cafe Home"
          >
            <span className="logo-emblem">
              <img
                src="/images/stackly-logo.png"
                alt="Stackly Cafe Logo"
                className="logo-img"
              />
            </span>
            <span className="logo-text-group">
              <span className="logo-title">Stackly Cafe</span>
              <span className="logo-tagline">Artisan Coffeehouse</span>
            </span>
          </Link>

          <nav className="navbar-links" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            {user && (
              <div className="user-pill" title={`Signed in as ${user.email}`}>
                <User size={14} />
                <span>{user.name.split(' ')[0]}</span>
                <button
                  type="button"
                  className="user-logout-btn"
                  onClick={logout}
                  aria-label="Sign out"
                >
                  ×
                </button>
              </div>
            )}

            <button
              type="button"
              className="icon-btn"
              aria-label="Search coffee and food"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search size={19} />
            </button>

            <Link
              to="/cart"
              className="icon-btn cart-icon-btn"
              aria-label={`Shopping cart with ${cartCount} items`}
              onClick={() => setMobileOpen(false)}
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

            <button
              type="button"
              className="hamburger-btn"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        <div className={`navbar-search-drawer ${searchOpen ? 'open' : ''}`}>
          <div className="container">
            <form className="navbar-search-form" onSubmit={handleSearchSubmit}>
              <Search size={18} className="search-field-icon" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search espresso, cold brew, croissants, cakes, burgers..."
                aria-label="Search cafe products"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Search
              </button>
              <button
                type="button"
                className="search-close-btn"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-nav-header">
          <span className="mobile-nav-brand">
            <img src="/images/stackly-logo.png" alt="Stackly Cafe" className="mobile-logo-img" />
            Stackly Cafe
          </span>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <form className="mobile-search-box" onSubmit={handleSearchSubmit}>
          <Search size={16} />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search menu & products..."
          />
        </form>

        <div className="mobile-nav-list">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            All Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setMobileOpen(false)}
          >
            Shopping Cart ({cartCount})
          </NavLink>
        </div>

        <div className="mobile-nav-footer">
          <Link
            to="/products"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => setMobileOpen(false)}
          >
            Order Fresh Coffee
          </Link>
        </div>
      </aside>
    </>
  )
}

