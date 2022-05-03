<template>
  <div class="h-full flex items-center justify-between">
    <div>
      <ym-svg svg-name="fu" />
    </div>
    <el-menu
      class="app-menu bg-brand-700 flex justify-center"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item, idx) in menus" :key="idx" :index="item.name">
        {{ $t(`common.${item.name}`) }}
      </el-menu-item>
    </el-menu>
    <div class="flex items-center">
      <BaseLangbar class="mr-4" />
      <BaseInfobar />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from '@/composition/route'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const { router, route } = useRoute()

    const menus = computed<any>(() => {
      const { routes } = router.options
      return routes[0].children?.filter(
        (item) => !item.meta || !item.meta.hidden
      )
    })

    const activeIndex = computed<string>(() => {
      const { path } = route.value
      const paths = path.split('/')
      const menu = menus.value.find((item) => item.name === paths[1])
      return menu ? menu.name : ''
    })

    const handleSelect = (index: string) => {
      router.push({
        name: index,
      })
    }

    return {
      activeIndex,
      menus,
      route,
      router,
      handleSelect,
    }
  },
})
</script>

<style lang="scss" scoped>
:deep(.app-menu) {
  @apply w-2/3 border-b-0 #{!important};
  .el-menu-item {
    @apply text-brand-200 font-medium;
    &:hover,
    &:focus {
      @apply bg-brand-700 text-white #{!important};
    }
    &.is-active {
      @apply text-white #{!important};
    }
  }
}
</style>
