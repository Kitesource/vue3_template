import { RouteRecordRaw } from 'vue-router';

const code: RouteRecordRaw = {
  name: 'code',
  path: 'code',
  component: () => import('@/views/code/TheIndex.vue'),
};

export default code;
