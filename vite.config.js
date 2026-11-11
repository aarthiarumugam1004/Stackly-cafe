import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Stackly-cafe'
  const buildBase = repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
  return {
    base: command === 'build' ? buildBase : '/',
    plugins: [react()],
  }
})

