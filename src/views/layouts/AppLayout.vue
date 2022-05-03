<template>
  <el-container class="app">
    <el-header class="app-header">
      <AppHeader />
    </el-header>
    <el-container>
      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import AppHeader from './components/AppHeader.vue';
// 不用import，直接使用ref
</script>

<style scoped lang="scss">
.app-header{
  height: 60px;
  @apply bg-brand-700 px-6 w-full;
}
.app-main {
  height: calc(100vh - 60px);
  @apply p-0 bg-neutral-10;
}
</style>
