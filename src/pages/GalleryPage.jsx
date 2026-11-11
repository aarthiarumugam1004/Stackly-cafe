import { useState } from 'react'
import { ZoomIn, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData'
import './GalleryPage.css'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filteredGallery =
    activeTab === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab)

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Inside Stackly Cafe"
        title="Cafe Gallery"
        subtitle="Glimpses of steamed microfoam pours, warm bakery bakes, sunlit leather seating, dedicated baristas, and joyful neighborhood gatherings."
        image="/images/cafe-interior.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="gallery-filter-tabs" role="tablist" aria-label="Gallery Categories">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeTab === category}
                className={`filter-pill ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-tile ${item.featured && activeTab === 'All' ? 'gallery-featured' : ''}`}
                onClick={() => setLightboxItem(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-cat-badge">{item.category}</span>
                  <div className="gallery-overlay-bottom">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.caption}</p>
                    </div>
                    <span className="gallery-zoom-icon">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxItem(null)}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>
            <img src={lightboxItem.image} alt={lightboxItem.title} />
            <div className="lightbox-caption">
              <span>{lightboxItem.category}</span>
              <h3>{lightboxItem.title}</h3>
              <p>{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

