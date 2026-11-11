import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
} from 'lucide-react'
import SocialXIcon from './SocialXIcon'
import { assetUrl } from '../utils/assetUrl'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Cafe Menu', to: '/menu' },
  { label: 'All Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

const MENU_CATEGORIES = [
  'Hot Coffee',
  'Cold Coffee',
  'Tea',
  'Milkshakes',
  'Fresh Juices',
  'Cakes',
  'Burgers',
  'Sandwiches',
  'Snacks',
  'Desserts',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-badge">
              <img
                src={assetUrl('/images/stackly-logo.png')}
                alt="Stackly Cafe Logo"
                className="footer-logo-img"
              />
            </span>
            <div>
              <span className="footer-logo-name">Stackly Cafe</span>
              <span className="footer-logo-sub">Artisan Coffeehouse</span>
            </div>
          </Link>
          <p className="footer-desc">
            Small-batch single-origin coffee roasted in-house and paired with warm
            bakery creations, handcrafted drinks, and welcoming spaces designed for
            happy moments.
          </p>
          <div className="footer-socials" aria-label="Social media">
            <Link to="/instagram" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link to="/facebook" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
            <Link to="/x" aria-label="X (formerly Twitter)">
              <SocialXIcon size={16} />
            </Link>
            <Link to="/youtube" aria-label="YouTube">
              <Youtube size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {QUICK_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Categories */}
        <div className="footer-col">
          <h3 className="footer-heading">Menu Categories</h3>
          <ul className="footer-category-grid">
            {MENU_CATEGORIES.map((category) => (
              <li key={category}>
                <Link to={`/menu?category=${encodeURIComponent(category)}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="footer-col">
          <h3 className="footer-heading">Visit &amp; Stay Updated</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={16} />
              <span>248 Roastmaster Lane, Artisan District, Seattle, WA 98101</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+1 (206) 555-0194</span>
            </li>
            <li>
              <Mail size={16} />
              <span>hello@stacklycafe.com</span>
            </li>
            <li>
              <Clock size={16} />
              <span>Mon–Fri: 7:00 AM – 9:30 PM | Sat–Sun: 8:00 AM – 10:30 PM</span>
            </li>
          </ul>

          <div className="footer-newsletter">
            <p className="newsletter-title">Subscribe for seasonal roasts &amp; 15% off</p>
            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={17} />
                <span>Welcome to Stackly Cafe! Check your inbox soon.</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe} noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  placeholder="Your email address"
                  aria-label="Newsletter email address"
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <Send size={16} />
                </button>
              </form>
            )}
            {error && <p className="newsletter-error">{error}</p>}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Stackly Cafe. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">Our Story</Link>
            <Link to="/services">Catering &amp; Events</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

