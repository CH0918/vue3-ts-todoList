<template>
  <div class="wrap">
    <el-header class="header">
      <el-switch
        :active-icon="EpSunny"
        :inactive-icon="EpMoon"
        inline-prompt
        class="switch"
        v-model="theme"
        @change="changeTheme()"
      >
      </el-switch>
      <icon-ep-setting />
    </el-header>
  </div>
</template>

<script setup lang="ts">
import EpMoon from '~icons/ep/moon'
import EpSunny from '~icons/ep/sunny'
import { useThemeStore } from '@/store/useThemeStore'
const { toggleDark, isDark } = useThemeStore()
const changeTheme = () => {
  toggleDark()
}
const theme = ref(!isDark)
</script>

<style scoped>
.wrap {
  width: 100%;
}
.header {
  display: flex;
  justify-content: end;
  align-items: center;
}
.switch {
  margin-right: 20px;
}
</style>

