import { RouteRecordRaw } from 'vue-router';

const example: RouteRecordRaw = {
  name: 'case',
  path: 'case',
  component: () => import('@/views/case/TheIndex.vue'),
};

export default example;
