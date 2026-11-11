import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/cafeData'
import './CartPage.css'

export default function CartPage() {
  const { cartItems, subtotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  const FREE_DELIVERY_MIN = 799
  const deliveryFee = subtotal === 0 || subtotal >= FREE_DELIVERY_MIN ? 0 : 49
  const tax = Math.round(subtotal * 0.05)
  const totalAmount = subtotal + deliveryFee + tax

  const handleCheckout = () => {
    const code = `SC-${Math.floor(100000 + Math.random() * 900000)}`
    setOrderNumber(code)
    setOrderPlaced(true)
    clearCart()
  }

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Your Order Bag"
        title="Shopping Cart"
        subtitle="Review your handcrafted beverages, cakes, and savory bites before we begin brewing fresh for you."
        image="/images/coffee-beans.jpg"
      />

      <section className="section">
        <div className="container">
          {orderPlaced ? (
            <div className="cart-empty-card checkout-confirmed">
              <div className="confirmed-icon">
                <CheckCircle2 size={46} />
              </div>
              <h2>Order Confirmed! #{orderNumber}</h2>
              <p>
                Thank you for ordering from Stackly Cafe. Our baristas and bakery team
                are crafting your items fresh right now.
              </p>
              <div className="cart-empty-actions">
                <Link to="/menu" className="btn btn-primary">
                  Order More Coffee
                </Link>
                <Link to="/" className="btn btn-outline">
                  Back to Home
                </Link>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="cart-empty-card">
              <div className="empty-bag-icon">
                <ShoppingBag size={42} />
              </div>
              <h2>Your Cafe Cart is Empty</h2>
              <p>
                Explore our freshly roasted espressos, iced cold brews, Belgian chocolate
                cakes, and artisan bistro bites to fill your basket.
              </p>
              <div className="cart-empty-actions">
                <Link to="/menu" className="btn btn-primary">
                  Explore Menu
                </Link>
                <Link to="/products" className="btn btn-outline">
                  Browse All Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="cart-layout">
              {/* Items List */}
              <div className="cart-items-col">
                <div className="cart-list-header">
                  <h2>Selected Items ({cartItems.length})</h2>
                  <button
                    type="button"
                    className="clear-cart-link"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <article key={item.cartKey} className="cart-item-row">
                      <Link to={`/product/${item.id}`} className="cart-item-thumb">
                        <img src={item.image} alt={item.name} />
                      </Link>

                      <div className="cart-item-info">
                        <span className="cart-item-cat">{item.category}</span>
                        <Link to={`/product/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
                        <p className="cart-item-meta">
                          Size: {item.size}
                          {item.milk && item.milk !== 'Standard' && item.milk !== 'Kitchen Standard'
                            ? ` • ${item.milk}`
                            : ''}
                          {item.sweetness && item.sweetness !== 'Standard'
                            ? ` • ${item.sweetness}`
                            : ''}
                        </p>
                        {item.extras && item.extras.length > 0 && (
                          <p className="cart-item-extras">
                            Add-ons: {item.extras.join(', ')}
                          </p>
                        )}
                        <span className="cart-unit-price">
                          {formatPrice(item.unitPrice)} each
                        </span>
                      </div>

                      <div className="cart-item-controls">
                        <div className="quantity-stepper">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartKey, -1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={15} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartKey, 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <strong className="cart-line-total">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </strong>

                        <button
                          type="button"
                          className="remove-item-btn"
                          onClick={() => removeFromCart(item.cartKey)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <aside className="cart-summary-card">
                <h3>Order Summary</h3>

                <div className="summary-lines">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Estimated GST (5%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Local Delivery</span>
                    <span>
                      {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
                    </span>
                  </div>
                  {subtotal < FREE_DELIVERY_MIN && (
                    <p className="free-delivery-hint">
                      Add {formatPrice(FREE_DELIVERY_MIN - subtotal)} more to unlock free doorstep delivery!
                    </p>
                  )}
                  <div className="summary-divider" />
                  <div className="summary-row summary-total">
                    <span>Total Amount</span>
                    <span>{formatPrice(totalAmount)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary checkout-btn"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout <ArrowRight size={17} />
                </button>

                <div className="summary-trust-note">
                  <ShieldCheck size={17} />
                  <span>Freshly prepared to order • Eco-friendly packaging</span>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

