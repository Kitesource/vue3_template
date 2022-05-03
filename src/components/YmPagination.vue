<template>
  <el-pagination
    :class="{ 'hidden': !total }"
    v-bind="attrs"
    :total="total"
    :layout="layout"
    :background="background"
    :page-sizes="pageSizes"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    @size-change="change"
    @current-change="change"
  />
</template>
<script lang="ts" setup>
import { proxyProp } from '@/composition'
interface Props {
  total:number,
  layout?:string,
  background?:boolean,
  pageSizes?: Array<number>
  currentPage?: number,
  pageSize?: number,
}
const props = withDefaults(defineProps<Props>(), {
  layout: 'total, prev, pager, next, sizes',
  pageSizes: () => [10, 20, 30, 50, 100],
  background: false,
  currentPage: 1,
  pageSize: 10,
})
const emit = defineEmits([
  'update:pageSize',
  'update:currentPage',
  'change',
])

const attrs = useAttrs()
const pageSize = proxyProp(props,'pageSize')
const currentPage = proxyProp(props,'currentPage')

const change = () => {
  emit('change')
}
</script>
