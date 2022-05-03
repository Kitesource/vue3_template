<template>
  <div class="p-4">
    <div class="flex justify-between mb-4">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-input
        v-model="input2"
        class="w-60 ml-4"
        placeholder="Type something"
        :suffix-icon="Search"
      />
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
      <el-tab-pane label="全局变量" name="second">全局变量</el-tab-pane>
      <el-tab-pane label="测试用例" name="third">测试用例</el-tab-pane>
      <el-tab-pane label="执行计划" name="fourth">执行计划</el-tab-pane>
      <el-tab-pane label="通知管理" name="fifth">通知管理</el-tab-pane>
      <el-tab-pane label="执行日志" name="sixth">执行日志</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { Search, ArrowRight } from '@element-plus/icons-vue'
const input2 = ref('')

const activeName = ref('first')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped></style>
