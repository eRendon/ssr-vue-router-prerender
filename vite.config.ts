import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { createHtmlPlugin } from "vite-plugin-html";

const config: UserConfig = {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    ssr(),
    AutoImport({
      imports: [
        // presets
        'vue',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'js'],
      dts: 'src/components.d.ts',
      // https://github.com/element-plus/element-plus/issues/4923
      // resolvers: [ElementPlusResolver()],
    }),
    createHtmlPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/variables.scss";
                         @import "./src/assets/scss/mixins.scss";`
      }
    }
  },
  clearScreen: false,
  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src'),
    }
  }
}

export default config
