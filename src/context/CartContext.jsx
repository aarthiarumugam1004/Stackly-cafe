import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const LEGACY_CART_KEYS = [
  'velvet_roast_cart_v1',
  'stackly_cafe_cart_v1',
  'stackly_cafe_cart_v2',
]

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    try {
      LEGACY_CART_KEYS.forEach((key) => localStorage.removeItem(key))
    } catch {
      // Ignore storage access issues gracefully
    }
  }, [])

  useEffect(() => {
    if (!toastMessage) return
    const timer = setTimeout(() => setToastMessage(''), 2800)
    return () => clearTimeout(timer)
  }, [toastMessage])

  const showToast = (msg) => {
    setToastMessage(msg)
  }

  const addToCart = (product, options = {}) => {
    const size = options.size || (product.sizes ? product.sizes[1]?.label || product.sizes[0]?.label : 'Regular')
    const milk = options.milk || 'Standard'
    const sweetness = options.sweetness || 'Regular'
    const extras = options.extras || []
    const quantity = options.quantity || 1
    const unitPrice = typeof options.unitPrice === 'number' ? options.unitPrice : product.price

    const cartKey = `${product.id}__${size}__${milk}__${sweetness}__${extras.join(',')}`

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey)
      if (existing) {
        return prev.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          cartKey,
          id: product.id,
          name: product.name,
          category: product.category,
          image: product.image,
          unitPrice,
          size,
          milk,
          sweetness,
          extras,
          quantity,
        },
      ]
    })

    showToast(`Added ${quantity}x ${product.name} to your cart`)
  }

  const updateQuantity = (cartKey, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (cartKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey))
    showToast('Removed item from cart')
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        toastMessage,
        showToast,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider')
  }
  return ctx
}

