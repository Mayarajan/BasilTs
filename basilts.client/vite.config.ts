import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://localhost:7295', // ?? UPDATE THIS PORT TO MATCH YOUR LAUNCHSETTINGS.JSON
                secure: false,
                changeOrigin: true
            }
        },
        port: 5173,
    }
})