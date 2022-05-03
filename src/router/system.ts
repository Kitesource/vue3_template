import { RouteRecordRaw } from 'vue-router';

const system: RouteRecordRaw = {
  path: 'system',
  name: 'system',
  component: () => import('@/views/system/TheIndex.vue'),
};

export default system;
