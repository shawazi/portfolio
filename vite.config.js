import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const base = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
})
