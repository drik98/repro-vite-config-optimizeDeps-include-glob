// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [ {
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },

  // Using a glob: Does not work
  // optimizeDeps: {
  //   include: [
  //     "vuetify/**/*.mjs",
  //   ],
  // },

  // Listing each dependency separately: works 

  // optimizeDeps: {
  //   include: [
  //     "vuetify/lib/components/VCard/index.mjs",
  //     "vuetify/lib/components/VGrid/index.mjs",
  //     "vuetify/lib/components/VImg/index.mjs",
  //     "vuetify/lib/components/VKbd/index.mjs",
  //     "vuetify/lib/components/VOverlay/index.mjs",
  //     "vuetify/lib/components/VResponsive/index.mjs",
  //   ],
  // },
});
