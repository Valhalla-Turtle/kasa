import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: ['.replit.dev'], // Allow Replit subdomains
        host: true // Allows external access
    }
});
