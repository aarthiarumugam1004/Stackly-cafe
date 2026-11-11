import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { CAFE_PRODUCTS, MENU_CATEGORIES } from '../data/cafeData'
import './ProductsPage.css'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All'
  )
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const q = searchParams.get('search')
    if (q !== null) setSearchTerm(q)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    const matches = CAFE_PRODUCTS.filter((item) => {
      const catMatch =
        selectedCategory === 'All' || item.category === selectedCategory
      const textMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query)
      return catMatch && textMatch
    })

    const sorted = [...matches]
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating)
    }
    return sorted
  }, [searchTerm, selectedCategory, sortBy])

  const resetFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All')
    setSortBy('featured')
    setSearchParams({})
  }

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Order Online"
        title="Cafe Products &amp; Fresh Bites"
        subtitle="Search by flavor, filter by category, or sort by price—then customize your order with milks, sizes, and add-ons."
        image="/images/hero-cafe.jpg"
      />

      <section className="section">
        <div className="container">
          {/* Search & Sort Controls */}
          <div className="products-controls-card">
            <div className="products-search-wrap">
              <Search size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search coffees, teas, cakes, burgers, croissants..."
                aria-label="Search products"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="clear-input-btn"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="products-sort-wrap">
              <SlidersHorizontal size={17} />
              <label htmlFor="sort-products">Sort:</label>
              <select
                id="sort-products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured Selection</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="products-category-chips">
            <button
              type="button"
              className={`filter-pill ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All ({CAFE_PRODUCTS.length})
            </button>
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-results-bar">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of{' '}
              {CAFE_PRODUCTS.length} cafe products
            </span>
            {(searchTerm || selectedCategory !== 'All' || sortBy !== 'featured') && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={resetFilters}
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-empty-state">
              <h3>No matching cafe items found</h3>
              <p>
                Try another keyword like &ldquo;cappuccino&rdquo;, &ldquo;matcha&rdquo;,
                &ldquo;cake&rdquo;, or reset filters to browse the full menu.
              </p>
              <button type="button" className="btn btn-primary" onClick={resetFilters}>
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

