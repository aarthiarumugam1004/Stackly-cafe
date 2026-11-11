import { Link, useNavigate } from 'react-router-dom'
import { Star, ShoppingBag, ArrowUpRight } from 'lucide-react'
import { formatPrice } from '../data/cafeData'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-category-pill">{product.category}</span>
        {product.badge && <span className="product-badge-pill">{product.badge}</span>}
        <span className="product-view-pill">
          View Details <ArrowUpRight size={14} />
        </span>
      </Link>

      <div className="product-card-body">
        <div className="product-card-meta">
          <div className="product-rating" aria-label={`Rated ${product.rating} out of 5`}>
            <Star size={14} fill="currentColor" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="review-count">({product.reviews})</span>
          </div>
          <span className="product-price">{formatPrice(product.price)}</span>
        </div>

        <Link to={`/product/${product.id}`} className="product-title-link">
          <h3 className="product-card-title">{product.name}</h3>
        </Link>

        <p className="product-card-desc">{product.shortDescription}</p>

        <div className="product-card-actions">
          <button
            type="button"
            className="btn btn-primary btn-sm product-add-btn"
            onClick={() => navigate('/cart')}
          >
            <ShoppingBag size={15} />
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="btn btn-outline btn-sm">
            Details
          </Link>
        </div>
      </div>
    </article>
  )
}

