import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
import {
    defineConfig, loadEnv,
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig((args) => {
    const env = loadEnv(args.mode, process.cwd())
    return {
        base: '/file-uploader/',
        server: {
            proxy: {
                [`/${args.mode}`]: {
                    target: env.VITE_APP_BASE_URL,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path): string => path.replace(new RegExp(`^/${args.mode}`), '')
                }
            }
        },
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [vue(), UnoCSS(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),],
    }
})
