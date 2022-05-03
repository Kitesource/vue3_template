import { PageParams } from '@/types/common'
import { ComputedRef } from 'vue'

/**
 * 适用于前端本地对列表进行分页（即一次性请求所有列表，然后手动分页）
 * @param list 总的列表
 * @param pageInfo 分页条件
 * @returns 分页后的列表数据
 */
 export function usePagination<T>(list: ComputedRef<T[]>, pageInfo: PageParams) {
  const res = computed<T[]>(() => {
    const start = (pageInfo.pageNum - 1) * pageInfo.pageSize;
    return list.value.slice(start, start + pageInfo.pageSize);
  });
  return res;
}

export function usePageParams() {
  const pageInfo = reactive<PageParams>({
    pageNum: 1,
    pageSize: 10,
  });
  const total = ref(0);
  const loading = ref(false);

  return {
    pageInfo,
    total,
    loading,
  };
}
