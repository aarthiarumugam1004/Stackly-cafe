import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)
const AUTH_STORAGE_KEY = 'velvet_roast_user_v1'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  const login = ({ email, remember }) => {
    const profile = {
      name: email.split('@')[0].replace(/[._-]/g, ' '),
      email,
    }
    setUser(profile)
    if (remember) {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(profile))
      } catch {
        // ignore storage errors
      }
    }
    return profile
  }

  const register = ({ fullName, email, phone }) => {
    const profile = { name: fullName, email, phone }
    setUser(profile)
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(profile))
    } catch {
      // ignore storage errors
    }
    return profile
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY)
    } catch {
      // ignore storage errors
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}

