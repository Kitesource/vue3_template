import { RouteRecordRaw } from 'vue-router';

const report: RouteRecordRaw = {
  path: 'report',
  name: 'report',
  component: () => import('@/views/report/TheIndex.vue'),
};

export default report;
