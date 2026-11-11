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
import PageHero from '../components/PageHero'
import SocialXIcon from '../components/SocialXIcon'
import './ContactPage.css'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!form.subject.trim()) next.subject = 'Please enter a subject.'
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please write a short message (at least 10 characters).'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Stackly Cafe"
        subtitle="Questions about party bookings, coffee catering, custom birthday cakes, or wholesale beans? Our hospitality team would love to hear from you."
        image="/images/cafe-interior.jpg"
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info-panel">
            <span className="section-eyebrow">Visit Our Coffeehouse</span>
            <h2 className="section-title">We&apos;d Love to Welcome You</h2>
            <p className="contact-intro">
              Drop by for a freshly poured cappuccino, reserve a lounge table for your
              group, or send us a message right here.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3>Cafe Address</h3>
                  <p>248 Roastmaster Lane, Artisan District, Seattle, WA 98101</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h3>Contact Number</h3>
                  <p>+1 (206) 555-0194</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h3>Email Address</h3>
                  <p>hello@stacklycafe.com</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h3>Opening Hours</h3>
                  <p>Mon – Fri: 7:00 AM – 9:30 PM</p>
                  <p>Sat – Sun: 8:00 AM – 10:30 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span>Follow Our Daily Roasts:</span>
              <div className="contact-social-icons">
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
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-card">
            <h3>Send Us a Message</h3>
            <p className="contact-form-sub">
              Fill out the form below and our cafe manager will reply within one business day.
            </p>

            {submitted && (
              <div className="contact-success-banner">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Thank you for reaching out!</strong>
                  <p>Your inquiry has been received. We look forward to hosting you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="c-name">Name</label>
                  <input
                    id="c-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    className={errors.name ? 'input-err' : ''}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="contact-field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    className={errors.email ? 'input-err' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="c-phone">Phone Number</label>
                  <input
                    id="c-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+1 (206) 555-0188"
                    className={errors.phone ? 'input-err' : ''}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="contact-field">
                  <label htmlFor="c-subject">Subject</label>
                  <input
                    id="c-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="Party booking, catering, feedback..."
                    className={errors.subject ? 'input-err' : ''}
                  />
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  rows="5"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your request, date, or favorite coffee..."
                  className={errors.message ? 'input-err' : ''}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={17} /> Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section section-beige map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Find Us Easily</span>
            <h2 className="section-title">Our Cafe Location</h2>
            <p className="section-subtitle">
              248 Roastmaster Lane, Artisan District, Seattle — two blocks from Pike Place
              with street parking and bike racks out front.
            </p>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Stackly Cafe Location Map"
              src="https://maps.google.com/maps?q=Pike%20Place%20Market%20Seattle&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}

