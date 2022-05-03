<template>
  <el-dropdown
    trigger="click"
    class="user h-full bg-brand-700 flex items-center justify-end"
    @command="selectItem"
  >
    <span
      class="hover:bg-brand-700 text-brand-200 cursor-pointer hover:text-white flex items-center"
    >
      <span>
        UserName
      </span>
      <el-icon><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          command="change"
        >
          <el-icon><Key /></el-icon>
          {{ $t('user.changePassword') }}
        </el-dropdown-item>
        <el-dropdown-item
          command="logout"
        >
          <el-icon><SwitchButton /></el-icon>
          {{ $t('user.logout') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { Key, SwitchButton, ArrowDown } from '@element-plus/icons-vue'

const router = useRouter()
const selectItem = (command: string) => {
  switch (command) {
    case 'logout':
      router.push({ name: 'login' })
      break
    case 'change':
      ElMessage.info('change password')
      break
    default:
      break
  }
}
</script>
