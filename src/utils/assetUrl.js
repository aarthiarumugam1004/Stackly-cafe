/**
 * Resolves a root-relative public asset path against Vite's configured base URL
 * so assets load both in local dev (`/`) and subpath deployments (e.g. GitHub Pages).
 * @param {string} path
 * @returns {string}
 */
export function assetUrl(path) {
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path
  const base = import.meta.env.BASE_URL || '/'
  if (base !== '/' && path.startsWith(base)) return path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

/**
 * Normalizes the `image` field on each item in a data collection using `assetUrl`.
 * @template {{ image?: string }} T
 * @param {T[]} items
 * @returns {T[]}
 */
export function resolveItemImages(items) {
  return items.map((item) =>
    item.image ? { ...item, image: assetUrl(item.image) } : item
  )
}
