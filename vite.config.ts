import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ViteSvgIcons from 'vite-plugin-svg-icons';
import AutoImport from 'unplugin-auto-import/vite';
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { minifyHtml } from "vite-plugin-html";

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
    ViteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    minifyHtml(),
    styleImport({
      resolves:[
        ElementPlusResolve(),
      ],
    })
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
