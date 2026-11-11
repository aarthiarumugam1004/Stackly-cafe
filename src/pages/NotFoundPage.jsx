import { Link, useLocation } from 'react-router-dom'
import { Home, Coffee, Compass, Sparkles } from 'lucide-react'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const location = useLocation()

  return (
    <section className="not-found-section page-fade" aria-labelledby="error-404-title">
      {/* Decorative Ambient Coffee Rings & Floating Beans */}
      <div className="nf-ambient-ring nf-ring-1" aria-hidden="true" />
      <div className="nf-ambient-ring nf-ring-2" aria-hidden="true" />
      <div className="nf-bean nf-bean-1" aria-hidden="true" />
      <div className="nf-bean nf-bean-2" aria-hidden="true" />
      <div className="nf-bean nf-bean-3" aria-hidden="true" />

      <div className="container nf-container">
        <div className="nf-card">
          <div className="nf-top-pill">
            <Sparkles size={14} />
            <span>Error 404 • Route Not Available</span>
          </div>

          {/* Giant 4 [Steaming Coffee Cup SVG] 4 Display */}
          <div className="nf-visual-404" aria-hidden="true">
            <span className="nf-digit">4</span>

            <div className="nf-cup-stage">
              {/* Animated rising steam */}
              <div className="nf-steam-group">
                <span className="nf-steam nf-steam-a" />
                <span className="nf-steam nf-steam-b" />
                <span className="nf-steam nf-steam-c" />
              </div>

              {/* Bespoke Stackly Cafe Cup SVG */}
              <svg
                className="nf-cup-svg"
                viewBox="0 0 160 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Saucer */}
                <ellipse cx="76" cy="122" rx="60" ry="11" fill="#E8D7C5" />
                <ellipse cx="76" cy="120" rx="46" ry="7" fill="#D4A373" opacity="0.45" />

                {/* Cup Handle */}
                <path
                  d="M118 58C136 58 146 69 146 82C146 95 135 104 116 104"
                  stroke="#4A2C1D"
                  strokeWidth="10"
                  strokeLinecap="round"
                />

                {/* Cup Body */}
                <path
                  d="M28 48H124L114 102C111 114 98 121 76 121C54 121 41 114 38 102L28 48Z"
                  fill="#2B1810"
                />
                <path
                  d="M34 52H118L110 98C107 109 96 115 76 115C56 115 45 109 42 98L34 52Z"
                  fill="#4A2C1D"
                />

                {/* Coffee Rim & Crema Swirl */}
                <ellipse cx="76" cy="48" rx="48" ry="13" fill="#FBF7F2" />
                <ellipse cx="76" cy="48" rx="41" ry="9.5" fill="#8B5A3C" />
                <path
                  d="M60 48C66 43 74 43 76 48C78 53 86 53 92 48"
                  stroke="#F3E8DC"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Subtle Cup Emblem */}
                <circle cx="76" cy="82" r="14" fill="#FBF7F2" opacity="0.14" />
                <text
                  x="76"
                  y="87"
                  textAnchor="middle"
                  fill="#D4A373"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="serif"
                >
                  404
                </text>
              </svg>
            </div>

            <span className="nf-digit">4</span>
          </div>

          <h1 id="error-404-title" className="nf-title">
            Oops! This Page Has Stepped Out for Coffee
          </h1>

          <p className="nf-description">
            We couldn&apos;t serve <code>{location.pathname}</code> right now. Take a breath,
            enjoy the aroma of freshly roasted Arabica beans, and head back to our warm
            home lounge.
          </p>

          {/* Unique Bento Status Strip */}
          <div className="nf-status-strip">
            <div className="nf-status-chip">
              <Coffee size={17} />
              <div>
                <strong>Status Code</strong>
                <span>404 — Page Not Found</span>
              </div>
            </div>
            <div className="nf-status-chip">
              <Compass size={17} />
              <div>
                <strong>Requested Path</strong>
                <span>{location.pathname}</span>
              </div>
            </div>
          </div>

          <div className="nf-actions">
            <Link to="/" className="btn btn-primary nf-home-btn">
              <Home size={18} />
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

