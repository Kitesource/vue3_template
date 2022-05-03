<template>
  <el-container class="h-full">
    <el-aside
      width="300px"
      class="h-full bg-white border-r border-neutral-20 p-1"
    >
      <el-input
        v-model="inputValue"
        class="w-full my-4"
        placeholder="search project"
        :suffix-icon="Search"
      />
      <ul>
        <li
          v-for="item in projects"
          :key="item.id"
          class="p-2 m-2 text-center hover:bg-neutral-10 cursor-pointer"
          @click="toProject(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </el-aside>
    <el-main>
      <div
        v-if="!projectsId"
        class="grid xl:grid-cols-5 md:grid-cols-4 gap-4 overflow-y-auto"
      >
        <el-card
          v-for="(item, index) in 30"
          :key="index"
          class="h-40 cursor-pointer"
        >
          {{ item }}
        </el-card>
      </div>
      <router-view v-else />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { useParams, useRoute } from '@/composition/route'
interface Projects {
  id: number
  name: string
  description: string
}
const inputValue = ref('')
const { router } = useRoute()
const projectsId = useParams('projectsId')
const projects = reactive<Projects[]>([
  {
    id: 110,
    name: 'DS',
    description: 'DSweib',
  },
  {
    id: 111,
    name: 'YiDrone',
    description: 'YiDrone',
  },
  {
    id: 112,
    name: 'Ms',
    description: 'MSweb',
  },
])

const toProject = (id) => {
  router.push({
    path: `/projects/all/${id}`,
  })
}
</script>

<style scoped></style>
