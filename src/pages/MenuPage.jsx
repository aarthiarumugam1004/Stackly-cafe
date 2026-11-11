import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import { MENU_CATEGORIES, CAFE_PRODUCTS, formatPrice } from '../data/cafeData'
import { useCart } from '../context/CartContext'
import './MenuPage.css'

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(
    MENU_CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  )
  const { addToCart } = useCart()

  useEffect(() => {
    const paramCat = searchParams.get('category')
    if (paramCat && MENU_CATEGORIES.includes(paramCat)) {
      setActiveCategory(paramCat)
    } else if (!paramCat) {
      setActiveCategory('All')
    }
  }, [searchParams])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const filteredItems =
    activeCategory === 'All'
      ? CAFE_PRODUCTS
      : CAFE_PRODUCTS.filter((item) => item.category === activeCategory)

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Handcrafted Daily"
        title="Our Cafe Menu"
        subtitle="Explore small-batch espresso drinks, cold brews, ceremonial matcha, milkshakes, cold-pressed juices, artisan cakes, bistro burgers, and warm pastries."
        image="/images/coffee-beans.jpg"
      />

      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="menu-filter-bar" role="tablist" aria-label="Menu Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'All'}
              className={`filter-pill ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              All Menu ({CAFE_PRODUCTS.length})
            </button>
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-toolbar-meta">
            <p>
              Showing <strong>{filteredItems.length}</strong>{' '}
              {activeCategory === 'All' ? 'fresh cafe creations' : `${activeCategory} items`}
            </p>
            <Link to="/products" className="menu-shop-link">
              <Sparkles size={15} />
              Search &amp; Sort All Products <ArrowRight size={15} />
            </Link>
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article key={item.id} className="menu-item-card">
                <Link to={`/product/${item.id}`} className="menu-item-media">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="menu-item-cat">{item.category}</span>
                </Link>

                <div className="menu-item-content">
                  <div className="menu-item-top">
                    <Link to={`/product/${item.id}`}>
                      <h3>{item.name}</h3>
                    </Link>
                    <span className="menu-item-price">{formatPrice(item.price)}</span>
                  </div>

                  <p className="menu-item-desc">{item.shortDescription}</p>

                  <div className="menu-item-footer">
                    <Link to={`/product/${item.id}`} className="menu-customize-link">
                      Customize &amp; Sizes
                    </Link>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingBag size={14} /> Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

