import { CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Toast() {
  const { toastMessage } = useCart()

  if (!toastMessage) return null

  return (
    <div className="toast-banner" role="status" aria-live="polite">
      <CheckCircle2 size={19} className="toast-icon" />
      <span>{toastMessage}</span>
    </div>
  )
}

