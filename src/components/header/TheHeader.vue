<template>
  <div class="wrap">
    <el-header class="header">
      <el-switch
        :active-icon="EpMoon"
        :inactive-icon="EpSunny"
        inline-prompt
        class="switch"
      >
      </el-switch>
      <icon-ep-setting />
    </el-header>
  </div>
</template>

<script setup lang="ts">
import EpMoon from '~icons/ep/moon'
import EpSunny from '~icons/ep/sunny'
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

