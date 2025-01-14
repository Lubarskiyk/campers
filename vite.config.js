import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..600&display=swap',
    ]),
  ],
});
