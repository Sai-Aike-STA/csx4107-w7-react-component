import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // GitHub Pages hosts a project site inside a subdirectory named after
  // the repository, instead of directly at the root of the domain.
  //
  // This application is hosted at:
  // https://sai-aike-sta.github.io/csx4107-w7-hello-react/
  //
  // Setting `base` tells Vite to include the repository path when it
  // generates URLs for JavaScript, CSS, images, and other assets during
  // `pnpm build`. Without it, Vite may generate URLs beginning with
  // `/assets/`, which would make the browser search at the domain root
  // and cause the deployed page to fail to load its files.
  //
  // The value must match the GitHub repository name exactly.
  base: "/csx4107-w7-react-component/"
})
