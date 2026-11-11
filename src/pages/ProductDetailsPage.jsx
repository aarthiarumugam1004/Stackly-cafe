import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Star,
  Clock,
  Flame,
  MapPin,
  Minus,
  Plus,
  ShoppingBag,
  Zap,
  Check,
} from 'lucide-react'
import {
  CAFE_PRODUCTS,
  DRINK_SIZES,
  FOOD_SIZES,
  MILK_OPTIONS,
  SWEETNESS_OPTIONS,
  EXTRA_OPTIONS,
  FOOD_EXTRAS,
  formatPrice,
} from '../data/cafeData'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import './ProductDetailsPage.css'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = CAFE_PRODUCTS.find((p) => p.id === id)

  const sizes = product?.isBeverage ? DRINK_SIZES : FOOD_SIZES
  const availableExtras = product?.isBeverage ? EXTRA_OPTIONS : FOOD_EXTRAS

  const [selectedSize, setSelectedSize] = useState(
    product?.isBeverage ? DRINK_SIZES[1].label : FOOD_SIZES[0].label
  )
  const [selectedMilk, setSelectedMilk] = useState(MILK_OPTIONS[0])
  const [sweetness, setSweetness] = useState(SWEETNESS_OPTIONS[2])
  const [selectedExtras, setSelectedExtras] = useState([])
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) return
    setSelectedSize(product.isBeverage ? DRINK_SIZES[1].label : FOOD_SIZES[0].label)
    setSelectedMilk(MILK_OPTIONS[0])
    setSweetness(SWEETNESS_OPTIONS[2])
    setSelectedExtras([])
    setQuantity(1)
  }, [product])

  if (!product) {
    return (
      <section className="section page-fade">
        <div className="container not-found-box">
          <h2>Item Not Found</h2>
          <p>Sorry, we could not find that cafe item on our current menu.</p>
          <Link to="/menu" className="btn btn-primary">
            Back to Menu
          </Link>
        </div>
      </section>
    )
  }

  const sizeObj = sizes.find((s) => s.label === selectedSize) || sizes[0]
  const milkUpcharge =
    product.isBeverage && selectedMilk.includes('+₹45') ? 45 : 0
  const extrasTotal = selectedExtras.reduce((sum, extraName) => {
    const match = availableExtras.find((e) => e.label === extraName)
    return sum + (match ? match.price : 0)
  }, 0)

  const unitPrice = Math.max(50, product.price + sizeObj.priceDelta + milkUpcharge + extrasTotal)
  const totalPrice = unitPrice * quantity

  const toggleExtra = (label) => {
    setSelectedExtras((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  const handleAdd = () => {
    addToCart(product, {
      size: selectedSize,
      milk: product.isBeverage ? selectedMilk : 'Kitchen Standard',
      sweetness: product.isBeverage ? sweetness : 'Standard',
      extras: selectedExtras,
      quantity,
      unitPrice,
    })
  }

  const handleBuyNow = () => {
    handleAdd()
    navigate('/cart')
  }

  const relatedProducts = CAFE_PRODUCTS.filter(
    (item) => item.id !== product.id && (item.category === product.category || item.bestSeller)
  ).slice(0, 4)

  return (
    <div className="page-fade">
      <section className="details-section">
        <div className="container">
          <div className="details-breadcrumb">
            <Link to="/menu" className="back-link">
              <ArrowLeft size={16} /> Back to Menu
            </Link>
            <span>/</span>
            <Link to={`/menu?category=${encodeURIComponent(product.category)}`}>
              {product.category}
            </Link>
            <span>/</span>
            <span className="current">{product.name}</span>
          </div>

          <div className="details-grid">
            {/* Image Column */}
            <div className="details-media-col">
              <div className="details-main-image">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className="details-badge">{product.badge}</span>
                )}
              </div>

              <div className="details-quick-specs">
                <div className="spec-pill">
                  <Clock size={16} />
                  <span>Prep: {product.prepTime}</span>
                </div>
                <div className="spec-pill">
                  <Flame size={16} />
                  <span>{product.calories}</span>
                </div>
                <div className="spec-pill">
                  <MapPin size={16} />
                  <span>{product.origin}</span>
                </div>
              </div>
            </div>

            {/* Configurator Column */}
            <div className="details-info-col">
              <span className="details-cat-tag">{product.category}</span>
              <h1 className="details-title">{product.name}</h1>

              <div className="details-rating-row">
                <div className="details-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <strong>{product.rating.toFixed(1)}</strong>
                </div>
                <span className="details-reviews">{product.reviews} guest reviews</span>
              </div>

              <div className="details-price-box">
                <span className="details-unit-price">{formatPrice(unitPrice)}</span>
                <span className="details-price-note">per item (with selected options)</span>
              </div>

              <p className="details-full-desc">{product.fullDescription}</p>

              {/* Size Selector */}
              <div className="customizer-block">
                <label className="customizer-label">Select Size</label>
                <div className="option-pills">
                  {sizes.map((sz) => (
                    <button
                      key={sz.label}
                      type="button"
                      className={`option-pill ${selectedSize === sz.label ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(sz.label)}
                    >
                      <span>{sz.label}</span>
                      {sz.priceDelta !== 0 && (
                        <small>
                          {sz.priceDelta > 0
                            ? `+${formatPrice(sz.priceDelta)}`
                            : `-${formatPrice(Math.abs(sz.priceDelta))}`}
                        </small>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Beverage Customizations */}
              {product.isBeverage && (
                <>
                  <div className="customizer-block">
                    <label className="customizer-label">Milk Preference</label>
                    <div className="option-pills">
                      {MILK_OPTIONS.map((milk) => (
                        <button
                          key={milk}
                          type="button"
                          className={`option-pill ${selectedMilk === milk ? 'selected' : ''}`}
                          onClick={() => setSelectedMilk(milk)}
                        >
                          {milk}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="customizer-block">
                    <label className="customizer-label">Sweetness Level</label>
                    <div className="option-pills">
                      {SWEETNESS_OPTIONS.map((level) => (
                        <button
                          key={level}
                          type="button"
                          className={`option-pill ${sweetness === level ? 'selected' : ''}`}
                          onClick={() => setSweetness(level)}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Add-on Extras */}
              <div className="customizer-block">
                <label className="customizer-label">Optional Add-Ons</label>
                <div className="extras-grid">
                  {availableExtras.map((extra) => {
                    const checked = selectedExtras.includes(extra.label)
                    return (
                      <button
                        key={extra.label}
                        type="button"
                        className={`extra-toggle ${checked ? 'checked' : ''}`}
                        onClick={() => toggleExtra(extra.label)}
                      >
                        <span className="extra-checkbox">
                          {checked && <Check size={13} />}
                        </span>
                        <span className="extra-name">{extra.label}</span>
                        <span className="extra-price">
                          {extra.price > 0 ? `+${formatPrice(extra.price)}` : 'Free'}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Quantity & Action Buttons */}
              <div className="details-purchase-row">
                <div className="quantity-stepper" aria-label="Quantity selector">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button type="button" className="btn btn-primary" onClick={handleAdd}>
                  <ShoppingBag size={18} />
                  Add to Cart — {formatPrice(totalPrice)}
                </button>

                <button type="button" className="btn btn-accent" onClick={handleBuyNow}>
                  <Zap size={17} />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items */}
      <section className="section section-beige">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Pairs Well With</span>
            <h2 className="section-title">You Might Also Love</h2>
          </div>

          <div className="related-grid">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

