import { assetUrl } from '../utils/assetUrl'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, image = '/images/hero-cafe.jpg' }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${assetUrl(image)})` }}
    >
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}

