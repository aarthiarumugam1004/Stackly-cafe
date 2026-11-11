import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const { pathname } = useLocation()
  const showChrome = pathname === '/'

  return (
    <div className="app-shell">
      <ScrollToTop />
      {showChrome && <Navbar />}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {showChrome && <Footer />}
      <Toast />
    </div>
  )
}

