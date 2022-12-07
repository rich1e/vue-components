<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 09:36:36
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 09:51:39
 * @FilePath: /vue-components-test/src/App.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
