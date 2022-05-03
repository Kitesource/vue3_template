import { computed } from 'vue';
import router from '@/router';

/**
 * 直接使用vue-router实例相关的属性；
 * 相当于Vue实例的$route和$router；
 */
export function useRoute() {
  return {
    route: router.currentRoute,
    router,
  };
}

/**
 * 响应式地使用当前路由参数
 * @param name 路由参数名称
 */
export function useParams<T extends string | string[] = string>(name: string) {
  const { route } = useRoute();
  return computed<T>(() => (route.value.params[name] as T));
}

/**
 * 响应式地使用当前路由参数
 * @param name 路由参数名称
 */
export function useQuery<T extends string | string[] = string>(name: string) {
  const { route } = useRoute();
  return computed<T>(() => (route.value.query[name] as T));
}
