<!--
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-12-07 10:30:13
 * @LastEditors: gongyuqi@max-optics.com
 * @LastEditTime: 2022-12-07 13:21:50
 * @FilePath: /vue-components/src/components/Button.vue
 * @Description:
 *
-->
<script lang="ts">
export default {
  name: 'TButton'
}
</script>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

defineProps<{ btnType?: string; btnText?: string }>()

</script>

<template>
 <ElButton :type="btnType">
  {{btnText}}
 </ElButton>
</template>
