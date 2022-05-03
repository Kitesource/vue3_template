import { defineConfig } from 'vite'
import { createVitePlugins } from './src/plugins';
import path from 'path'

const testUrl = 'http://xxx.test.yimian.com.cn/'
const hamletTestUtl = 'http://xxx.test.yimian.com.cn/'
   
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, 'src') + '/'
      } // 模块路径alias
    ]
  },
  css: {
    // 自动按需引入插件（unplugin-vue-components）需要配置这个来覆盖样式变量；
    // https://element-plus.gitee.io/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/style/element.scss" as *;',
      },
    },
  },
  plugins: createVitePlugins(),
  server: {
    proxy: { // 本地接口转发
      '/api/auth': {
        target: hamletTestUtl,
        changeOrigin: true,
      },
      '/api': {
        target: testUrl,
        changeOrigin: true,
      },
    },
    open: true,
  },
})
