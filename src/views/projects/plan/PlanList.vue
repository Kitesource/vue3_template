<template>
  <div class="p-4">
    <div class="flex justify-end mb-4">
      <el-button :icon="Plus">添加测试计划</el-button>
      <el-input
        v-model="input2"
        class="w-60 ml-4"
        placeholder="Type something"
        :suffix-icon="Search"
      />
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { Plus, Search, Timer } from '@element-plus/icons-vue'
interface User {
  date: string
  name: string
  address: string
  projectsId: number
  projectId: number
}
const input2 = ref('')
const router = useRouter()
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
  router.push({
    name: 'planDetail',
    params: {
      projectsId: row.projectsId,
      projectId: row.projectId,
    },
  })
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    projectsId: 110,
    projectId: 10,
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    projectsId: 111,
    projectId: 11,
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    projectsId: 112,
    projectId: 12,
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    projectsId: 113,
    projectId: 13,
  },
]
</script>
