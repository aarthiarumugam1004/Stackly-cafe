import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Coffee,
  ShoppingBag,
  Smartphone,
  Truck,
  Cake,
  Users,
  Sparkles,
  Wifi,
  ArrowRight,
  Check,
  X,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { CAFE_SERVICES } from '../data/servicesData'
import './ServicesPage.css'

const SERVICE_ICONS = {
  Coffee,
  ShoppingBag,
  Smartphone,
  Truck,
  Cake,
  Users,
  Sparkles,
  Wifi,
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Hospitality & Experiences"
        title="Our Cafe Services"
        subtitle="From tranquil dine-in espresso rituals and speedy doorstep delivery to bespoke party bookings and mobile coffee catering."
        image="/images/barista-craft.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Designed Around Every Coffee Moment</h2>
            <p className="section-subtitle">
              Explore our full range of in-cafe hospitality, digital convenience, and
              special event services.
            </p>
          </div>

          <div className="services-grid">
            {CAFE_SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || Coffee
              return (
                <article key={service.id} className="service-card">
                  <div className="service-media">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <div className="service-icon-badge">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm service-read-btn"
                      onClick={() => setSelectedService(service)}
                    >
                      Read More <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Banner */}
      <section className="section section-beige">
        <div className="container service-cta-banner">
          <div>
            <span className="section-eyebrow">Custom Events &amp; Group Orders</span>
            <h2 className="section-title">Planning a Celebration or Corporate Morning?</h2>
            <p className="section-subtitle">
              Reach out to our events team for customized pastry platters, birthday cakes,
              or mobile barista setups tailored to your guest count.
            </p>
          </div>
          <div className="service-cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Request Booking
            </Link>
            <Link to="/menu" className="btn btn-outline">
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Read More Modal */}
      {selectedService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="service-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
            >
              <X size={20} />
            </button>
            <div className="service-modal-img">
              <img src={selectedService.image} alt={selectedService.title} />
            </div>
            <div className="service-modal-body">
              <span className="section-eyebrow">Stackly Cafe Service</span>
              <h3 id="service-modal-title">{selectedService.title}</h3>
              <p>{selectedService.details}</p>
              <ul className="service-highlights">
                {selectedService.highlights.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="service-modal-actions">
                <Link
                  to={
                    selectedService.id === 'online-ordering' ||
                    selectedService.id === 'home-delivery' ||
                    selectedService.id === 'takeaway'
                      ? '/products'
                      : '/contact'
                  }
                  className="btn btn-primary"
                  onClick={() => setSelectedService(null)}
                >
                  {selectedService.id === 'online-ordering' ||
                  selectedService.id === 'home-delivery' ||
                  selectedService.id === 'takeaway'
                    ? 'Order Online Now'
                    : 'Inquire or Reserve'}
                </Link>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

