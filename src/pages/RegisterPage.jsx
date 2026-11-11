import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Coffee,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import './AuthPages.css'

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [registered, setRegistered] = useState(false)

  const navigate = useNavigate()
  const { register } = useAuth()
  const { showToast } = useCart()

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    const digitsOnly = form.phone.replace(/\D/g, '')
    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required.'
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      nextErrors.phone = 'Please enter a valid phone number (7–15 digits).'
    }

    if (!form.password) {
      nextErrors.password = 'Password is required.'
    } else if (form.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.'
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = 'Please confirm your password.'
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    register({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    })
    setRegistered(true)
    showToast('Account created! Enjoy Stackly Cafe.')
    setTimeout(() => {
      navigate('/menu')
    }, 950)
  }

  return (
    <section
      className="auth-page page-fade"
      style={{ backgroundImage: 'url(/images/cafe-interior.jpg)' }}
    >
      <div className="auth-overlay" />

      <div className="auth-card">
        <div
          className="auth-aside"
          style={{ backgroundImage: 'url(/images/coffee-beans.jpg)' }}
        >
          <div className="auth-aside-overlay" />
          <div className="auth-aside-content">
            <span className="auth-aside-badge">
              <Coffee size={14} /> Free Welcome Pastry
            </span>
            <h2>Join the Stackly Cafe Community</h2>
            <p>
              Create your guest profile for instant ordering, saved milk &amp; roast
              preferences, birthday treats, and invitations to seasonal cupping events.
            </p>
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="auth-form-header">
            <h1>Create Account</h1>
            <p>Register below to enjoy faster checkout &amp; cafe perks</p>
          </div>

          {registered && (
            <div className="auth-notice success">
              <CheckCircle2 size={18} />
              <span>Registration complete! Taking you to the menu...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label htmlFor="reg-name">Full Name</label>
              <div className={`auth-input-wrap ${errors.fullName ? 'has-error' : ''}`}>
                <User size={17} className="auth-input-icon" />
                <input
                  id="reg-name"
                  type="text"
                  value={form.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder="Clara Henderson"
                />
              </div>
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="reg-email">Email Address</label>
              <div className={`auth-input-wrap ${errors.email ? 'has-error' : ''}`}>
                <Mail size={17} className="auth-input-icon" />
                <input
                  id="reg-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="reg-phone">Phone Number</label>
              <div className={`auth-input-wrap ${errors.phone ? 'has-error' : ''}`}>
                <Phone size={17} className="auth-input-icon" />
                <input
                  id="reg-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 (206) 555-0148"
                />
              </div>
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="reg-pass">Password</label>
              <div className={`auth-input-wrap ${errors.password ? 'has-error' : ''}`}>
                <Lock size={17} className="auth-input-icon" />
                <input
                  id="reg-pass"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="At least 6 characters"
                />
                <button
                  type="button"
                  className="toggle-pass-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="reg-confirm">Confirm Password</label>
              <div
                className={`auth-input-wrap ${errors.confirmPassword ? 'has-error' : ''}`}
              >
                <Lock size={17} className="auth-input-icon" />
                <input
                  id="reg-confirm"
                  type={showPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="Re-enter your password"
                />
              </div>
              {errors.confirmPassword && (
                <span className="field-error">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Register
            </button>
          </form>

          <p className="auth-switch-text">
            Already have an account? <Link to="/login">Login Here</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

