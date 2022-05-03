import { RouteRecordRaw } from 'vue-router';
import projects from './projects';
import example from './example';
import code from './code';
import defect from './defect';
import report from './report';
import system from './system';

/** 路由信息 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/layouts/AppLayout.vue'),
    redirect: { name: 'projects' },
    meta: {},
    children: [
      projects,
      example,
      code,
      defect,
      report,
      system,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/TheLogin.vue'),
    meta: {
      hidden: true,
    },
  },
  // 测试路由，测试组件，工具，实现等
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/TheIndex.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('@/views/auth/Forbidden.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/auth/NotFound.vue'),
  },
];

export default routes;
