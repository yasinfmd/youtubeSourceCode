import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
console.log(process.env)
console.log(import.meta.env)
export default defineConfig({
  base:'/',
  mode:'development',
  appType:'spa',
  plugins: [react(),legacy()],
  css:{
    devSourcemap:true,
  },
  build:{
    minify:'terser',
    ssr:false,
    outDir:'build',
    assetsDir:'myassets',
    assetsInlineLimit:10000,
    cssCodeSplit:true,
    sourcemap:'inline',
    rollupOptions:{}
  },
  server:{
    port:3000,
    strictPort:false,
    open:true,
    base:'/',
    hmr:true
  },
  envPrefix:'APP_',
  // envDir:'env',
  resolve:{
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json','.png'],
    // alias:[
    //   {
    //     find:'@',replacement:'./src'
    //   }
    // ]
  }
})
