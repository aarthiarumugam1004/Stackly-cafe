import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Coffee, Mail, Lock, Eye, EyeOff, CheckCircle2, Info } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import './AuthPages.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [forgotNotice, setForgotNotice] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth()
  const { showToast } = useCart()

  const validate = () => {
    const nextErrors = {}
    if (!email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setForgotNotice('')
    if (!validate()) return

    login({ email: email.trim(), remember: rememberMe })
    setLoginSuccess(true)
    showToast('Welcome back to Stackly Cafe!')
    setTimeout(() => {
      navigate('/menu')
    }, 900)
  }

  const handleForgotPassword = () => {
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setForgotNotice(`Password reset instructions sent to ${email.trim()}.`)
    } else {
      setForgotNotice('Enter your email address above, then click Forgot Password again.')
    }
  }

  return (
    <section
      className="auth-page page-fade"
      style={{ backgroundImage: 'url(/images/hero-cafe.jpg)' }}
    >
      <div className="auth-overlay" />

      <div className="auth-card">
        <div
          className="auth-aside"
          style={{ backgroundImage: 'url(/images/cafe-interior.jpg)' }}
        >
          <div className="auth-aside-overlay" />
          <div className="auth-aside-content">
            <span className="auth-aside-badge">
              <Coffee size={14} /> Stackly Cafe Club
            </span>
            <h2>Welcome Back to Warm Mornings</h2>
            <p>
              Sign in to view saved custom drinks, reorder your favorite single-origin
              brews in one tap, and earn pastry rewards with every sip.
            </p>
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="auth-form-header">
            <h1>Member Login</h1>
            <p>Sign in with your Stackly Cafe account details</p>
          </div>

          {loginSuccess && (
            <div className="auth-notice success">
              <CheckCircle2 size={18} />
              <span>Login successful! Redirecting you to the cafe menu...</span>
            </div>
          )}

          {forgotNotice && (
            <div className="auth-notice info">
              <Info size={18} />
              <span>{forgotNotice}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label htmlFor="login-email">Email Address</label>
              <div className={`auth-input-wrap ${errors.email ? 'has-error' : ''}`}>
                <Mail size={17} className="auth-input-icon" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }))
                  }}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="login-password">Password</label>
              <div className={`auth-input-wrap ${errors.password ? 'has-error' : ''}`}>
                <Lock size={17} className="auth-input-icon" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: '' }))
                  }}
                  placeholder="Enter your password"
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

            <div className="auth-options-row">
              <label className="remember-check">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>

              <button
                type="button"
                className="forgot-link"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Login
            </button>
          </form>

          <p className="auth-switch-text">
            New to Stackly Cafe? <Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

