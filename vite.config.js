import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react(), /* tailwindcss plugin, etc. */],
//   server: {
//     host: true,        // listen on all network interfaces
//     port: 5174,        // or your desired port
//   },
// })

