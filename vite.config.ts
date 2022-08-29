import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
// import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
// import reactSvgPlugin from 'vite-plugin-react-svg'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    svgr({
      include: 'src/assets/images/*.svg'
    }),
    // reactSvgPlugin()
  ],
  server: {
    host: true,
    open: false,
  },
})
