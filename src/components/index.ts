/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 09:58:02
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 13:24:07
 * @FilePath: /vue-components/src/components/index.ts
 * @Description:
 *
 */
import { App } from "vue";
import HelloWorld from "./HelloWorld.vue";
import TButton from "./Button.vue";

export { HelloWorld };
export { TButton };

export default {
  install(app: App) {
    app.component("HelloWorld", HelloWorld);
    app.component("TButton", TButton);
  },
};
