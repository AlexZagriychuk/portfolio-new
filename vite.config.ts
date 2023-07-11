import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // port: 8080,
    proxy: {
      "/portfolio/bikeshop": {
        target: "https://awesome-bohr-a4110d.netlify.app",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/portfolio\/bikeshop/, ''),
      },
      "/portfolio/comfy": {
        target: "https://zesty-moxie-2cf5ec.netlify.app",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/portfolio\/comfy/, ''),
      },
      "/portfolio/simple-fullstack-app": {
        target: "https://aesthetic-squirrel-fbcde8.netlify.app",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/portfolio\/simple-fullstack-app/, ''),
      },
    }
  }
})
