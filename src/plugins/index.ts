import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import ElementPlus from './elementPlus';
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
  ];
  
  vitePlugins.push(...ElementPlus);
  vitePlugins.push(configSvgIconsPlugin());

  if (process.env.NODE_ENV !== 'development') {
    vitePlugins.push(viteCompression());
  }
  return vitePlugins;
}
