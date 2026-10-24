import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Bundles all JS + CSS into dist/index.html; images in public/ are copied alongside it.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
});
