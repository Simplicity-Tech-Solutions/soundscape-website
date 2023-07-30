import { defineConfig } from 'vite';
const { resolve } = require('path')
import solidPlugin from 'vite-plugin-solid';
import liveReload from 'vite-plugin-live-reload'
import { ssr } from 'vite-plugin-ssr/plugin';

const PACKAGE_JSON = require('./package.json');
const PRODUCTION_CONFIG = PACKAGE_JSON.config.production;
const DEVELOPMENT_CONFIG = PACKAGE_JSON.config.development;


export default defineConfig({
  root: '',
  base: process.env.NODE_ENV === 'development' ? DEVELOPMENT_CONFIG['build-url'] : PRODUCTION_CONFIG['build-url'],
  plugins: [
    /* 
      Uncomment the following line to enable solid-devtools.
      For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme 
    */
    // devtools(),
    solidPlugin(),
    liveReload(__dirname+'/**/*.{php,html,css,js.jsx,ts,tsx}'),
  ],
  server: {
    // required to load scripts from custom host
    cors: true,
    /* 
      needs a strict port to match on PHP side
      change freely, but update in your functions.php to match the same port
    */
    strictPort: true,
    port: 3000,
    https: false, // always keep this fasle, SSL is handled by the PHP server
    /* ------------------------------------------------------------------------- */
    hmr: {
      host: 'localhost',
      //port: 443
    },
    
  },
  build: {
    target: 'esnext', // default is 'esnext'
    // output dir for production build
    outDir: resolve(__dirname, './dist'),
    assetsDir: 'assets',
    emptyOutDir: true,
    
  
    // esbuild target
    //target: 'es2018',
    // emit manifest so PHP can find the hashed files
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main-[hash].js',
        chunkFileNames: 'chunk-[hash].js',
        assetFileNames: 'asset-[hash].[ext]',
      },
    },
    
  
      // minifying switch
      minify: true,
      write: true
  },
});
