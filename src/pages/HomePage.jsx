import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Sparkles,
  Flame,
  Award,
  Croissant,
  HeartHandshake,
  Star,
  Coffee,
  Wifi,
  Clock,
  MapPin,
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { CAFE_PRODUCTS } from '../data/cafeData'
import {
  SPECIAL_OFFERS,
  CAFE_SPECIALTIES,
  CUSTOMER_REVIEWS,
} from '../data/testimonialsData'
import { assetUrl } from '../utils/assetUrl'
import './HomePage.css'

const ICON_MAP = {
  Flame,
  Award,
  Croissant,
  HeartHandshake,
}

export default function HomePage() {
  const popularCoffees = CAFE_PRODUCTS.filter(
    (item) =>
      item.popular &&
      (item.category === 'Hot Coffee' || item.category === 'Cold Coffee')
  ).slice(0, 4)

  const popularIds = new Set(popularCoffees.map((item) => item.id))
  const bestSellers = CAFE_PRODUCTS.filter(
    (item) => item.bestSeller && !popularIds.has(item.id)
  ).slice(0, 4)

  return (
    <div className="page-fade">
      {/* 1. Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${assetUrl('/images/hero-cafe.jpg')})` }}
      >
        <div className="hero-overlay" />
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-pill">
              <Coffee size={15} />
              Small-Batch Specialty Roastery &amp; Artisan Bakery
            </span>
            <h1 className="hero-title">Fresh Coffee, Happy Moments</h1>
            <p className="hero-description">
              Welcome to Stackly Cafe — where freshly roasted single-origin beans,
              velvety espresso pours, and warm oven-baked pastries come together in a
              cozy neighborhood sanctuary made for connection.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-accent">
                Explore Menu
                <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn btn-outline-light">
                Order Now
              </Link>
            </div>
            <div className="hero-metrics">
              <div className="hero-metric-item">
                <strong>4.9 ★</strong>
                <span>2,400+ Guest Reviews</span>
              </div>
              <div className="hero-metric-divider" />
              <div className="hero-metric-item">
                <strong>100%</strong>
                <span>Direct-Trade Arabica</span>
              </div>
              <div className="hero-metric-divider" />
              <div className="hero-metric-item">
                <strong>Hourly</strong>
                <span>Fresh Artisan Bakes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Coffee Items */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Crafted to Order</span>
              <h2 className="section-title">Popular Coffee Items</h2>
              <p className="section-subtitle">
                Signature espresso pulls, hand-poured single origins, and slow-steeped
                cold brews loved by our morning regulars.
              </p>
            </div>
            <Link to="/menu?category=Hot%20Coffee" className="btn btn-outline">
              Full Coffee Menu <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cards-grid-4">
            {popularCoffees.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Special Offers */}
      <section className="section section-beige">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Sparkles size={15} /> Seasonal Highlights
            </span>
            <h2 className="section-title">Special Cafe Offers</h2>
            <p className="section-subtitle">
              Curated daily pairings and neighborhood bundles designed to elevate your
              coffee break.
            </p>
          </div>

          <div className="offers-grid">
            {SPECIAL_OFFERS.map((offer) => (
              <article key={offer.id} className="offer-card">
                <div className="offer-media">
                  <img src={offer.image} alt={offer.title} loading="lazy" />
                  <span className="offer-tag">{offer.tag}</span>
                </div>
                <div className="offer-body">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <Link
                    to={offer.targetId ? `/product/${offer.targetId}` : offer.targetPath}
                    className="offer-link"
                  >
                    {offer.ctaLabel} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Best-Selling Products */}
      <section className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Customer Favorites</span>
              <h2 className="section-title">Best-Selling Products</h2>
              <p className="section-subtitle">
                From rich Belgian ganache cakes to gourmet brioche burgers and cold-pressed
                favorites.
              </p>
            </div>
            <Link to="/products" className="btn btn-outline">
              Browse All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cards-grid-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Specialties */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why Guests Choose Us</span>
            <h2 className="section-title">Our Cafe Specialties</h2>
            <p className="section-subtitle">
              Every cup and plate reflects thoughtful sourcing, artisan roasting, and genuine
              warmth.
            </p>
          </div>

          <div className="specialties-grid">
            {CAFE_SPECIALTIES.map((spec) => {
              const IconComponent = ICON_MAP[spec.icon] || Coffee
              return (
                <div key={spec.title} className="specialty-card">
                  <div className="specialty-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3>{spec.title}</h3>
                  <p>{spec.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Cafe Atmosphere Section */}
      <section className="section section-ivory">
        <div className="container atmosphere-grid">
          <div className="atmosphere-gallery">
            <div className="atmosphere-main-img">
              <img
                src={assetUrl('/images/cafe-interior.jpg')}
                alt="Warm caramel leather seating and walnut tables inside Stackly Cafe"
                loading="lazy"
              />
            </div>
            <div className="atmosphere-sub-img">
              <img
                src={assetUrl('/images/barista-craft.jpg')}
                alt="Barista pouring delicate latte art at the counter"
                loading="lazy"
              />
            </div>
          </div>

          <div className="atmosphere-content">
            <span className="section-eyebrow">Cozy Spaces &amp; Warm Glow</span>
            <h2 className="section-title">A Sanctuary Built for Slow Sips &amp; Good Company</h2>
            <p className="atmosphere-text">
              Sink into buttery caramel leather banquettes beneath brass pendant lamps while
              gentle vinyl jazz drifts through the room. Whether you are catching up with old
              friends, celebrating a birthday, or focusing over a pour-over with our gigabit
              Wi-Fi, Stackly Cafe feels like your warmest home away from home.
            </p>

            <div className="atmosphere-features">
              <div className="atmosphere-feature">
                <Wifi size={18} />
                <div>
                  <strong>Fiber Wi-Fi &amp; Outlets</strong>
                  <span>Work-friendly booths</span>
                </div>
              </div>
              <div className="atmosphere-feature">
                <Clock size={18} />
                <div>
                  <strong>Open Early &amp; Late</strong>
                  <span>7:00 AM – 10:30 PM</span>
                </div>
              </div>
              <div className="atmosphere-feature">
                <MapPin size={18} />
                <div>
                  <strong>Artisan District</strong>
                  <span>248 Roastmaster Lane</span>
                </div>
              </div>
            </div>

            <div className="atmosphere-cta">
              <Link to="/gallery" className="btn btn-primary">
                Explore Cafe Gallery
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customer Reviews */}
      <section className="section section-beige">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Community Love</span>
            <h2 className="section-title">What Our Guests Say</h2>
            <p className="section-subtitle">
              Honest words from coffee lovers, remote creatives, and neighborhood families who
              start their day with us.
            </p>
          </div>

          <div className="reviews-grid">
            {CUSTOMER_REVIEWS.map((review) => (
              <article key={review.id} className="review-card">
                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
                <div className="review-footer">
                  <div>
                    <strong className="review-author">{review.name}</strong>
                    <span className="review-role">{review.role}</span>
                  </div>
                  <span className="review-favorite">Loves: {review.favorite}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

