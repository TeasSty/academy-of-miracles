import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages URL: https://teassty.github.io/academy-of-miracles/
const base = process.env.GITHUB_ACTIONS ? '/academy-of-miracles/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
