/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 09:36:36
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 10:21:11
 * @FilePath: /vue-components/vite.config.ts
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },

  plugins: [vue(), dts({ insertTypesEntry: true })],

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: './src/components/index.ts',
      name: 'VueComponents',
      // the proper extensions will be added
      fileName: 'vue-components'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
