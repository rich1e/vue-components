<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 09:36:36
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 13:21:00
 * @FilePath: /vue-components/src/App.vue
 * @Description:
 *
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import TButton from './components/Button.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <br/>
  <br/>
  <TButton :btn-type="`primary`" :btn-text="`Submit()`"/>
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
