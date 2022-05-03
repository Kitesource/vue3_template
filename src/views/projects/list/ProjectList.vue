<template>
  <div class="grid xl:grid-cols-4 md:grid-cols-3 gap-4 overflow-y-auto">
    <el-card
      v-for="(item, index) in 10"
      :key="index"
      class="h-40 cursor-pointer"
      @click="toDetail(item)"
    >
      {{ item }}
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from '@/composition/route'
const { router } = useRoute()
const toDetail = (id: number) => {
  router.push({
    name: 'projectDetail',
    params: {
      projectsId: id + 110,
      projectId: id,
    },
  })
}
</script>

<style lang="scss" scoped></style>
