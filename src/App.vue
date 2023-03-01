<script setup lang="ts">
import { useThemeStore, Theme } from '@/store'
const { isDark } = useThemeStore()
if (isDark) {
  document.documentElement.setAttribute('class', Theme.Dark)
}
</script>
<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>

<style scoped></style>

