<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 09:36:36
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 09:52:35
 * @FilePath: /vue-components-test/src/components/HelloWorld.vue
 * @Description: 
 * 
-->
<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is {{ count }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
