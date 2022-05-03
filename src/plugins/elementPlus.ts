import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 自动按需引入插件，直接从template中自动识别需要引入的组件
import ElementPlus from 'unplugin-element-plus/vite' // 手动按需引入插件，可以解决组件样式引入问题

export default [
  AutoImport({
    // 要转换的目标
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    // ui库解析器
    resolvers: [ElementPlusResolver()],
    imports: ['vue', 'vue-router'], //自动导入vue API
    eslintrc: {
      enabled: false,
      filepath: './.eslintrc- auto-import.json',
      globalsPropValue: true,
    },
  }),
  Components({
    // 用于搜索组件的目录的相对路径。
    dirs: ['src/components'],
    // ui库解析器
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass', // 样式使用sass，避免自定义sass变量不生效
      }),
    ],
    // 生成 `components.d.ts` 全局声明，也接受自定义文件名
    dts: true,
  }),
  ElementPlus({
    useSource: true, // 使用源文件而非编译后的css，避免自定义变量不生效
  }),
]
