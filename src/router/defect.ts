import { RouteRecordRaw } from 'vue-router';

const defect: RouteRecordRaw = {
  name: 'defect',
  path: 'defect',
  component: () => import('@/views/defect/TheIndex.vue'),
};

export default defect;
