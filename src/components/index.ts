/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 09:58:02
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 10:01:03
 * @FilePath: /vue-components-test/src/components/index.ts
 * @Description: 
 * 
 */
import { App } from "vue";
import HelloWorld from "./HelloWorld.vue";

export { HelloWorld };

export default {
  install(app: App) {
    app.component("HelloWorld", HelloWorld);
  },
};