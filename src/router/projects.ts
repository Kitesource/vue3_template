import { RouteRecordRaw } from 'vue-router';

const projects: RouteRecordRaw = {
  path: 'projects',
  name: 'projects',
  component: () => import('@/views/projects/TheIndex.vue'),
  redirect: { name: 'projectAll' },
  children: [
    {
      path: 'all',
      name: 'projectAll',
      component: () => import('@/views/projects/list/TheIndex.vue'),
      children: [
        {
          path: ':projectsId',
          name: 'projectList',
          component: () => import('@/views/projects/list/ProjectList.vue'),
        },
      ],
    },
    {
      path: ':projectsId/:projectId',
      name: 'projectDetail',
      component: () => import('@/views/projects/plan/PlanList.vue'),
    },
    {
      path: ':projectsId/:projectId/detail',
      name: 'planDetail',
      component: () => import('@/views/projects/plan/PlanDetail.vue'),
    },
  ],
};

export default projects;
