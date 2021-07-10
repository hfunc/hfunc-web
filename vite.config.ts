import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ]
    },
    server: {
        https: true,
        proxy: {
            '/api/v1/system_service': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/api/v1/auth_service': {
                target: 'http://127.0.0.1:8010',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/api/v1/user_service': {
                target: 'http://127.0.0.1:8020',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/api/v1/practice_service': {
                target: 'http://127.0.0.1:8020',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/api/v1/competition_service': {
                target: 'http://127.0.0.1:8020',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
            // '/apitest': {
            //     target: 'https://127.0.0.1:4242',
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace(/^\/apitest/, '')
            // }
        }
    }
})
