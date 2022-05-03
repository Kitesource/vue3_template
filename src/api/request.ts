import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router';
import $t from '@/i18n';
import * as qs from 'qs';

interface AxiosInstance2 extends AxiosInstance {
  (config?: AxiosRequestConfig): Promise<unknown>; // 使AxiosPromise兼容Promise
  (url: string, config?: AxiosRequestConfig): Promise<unknown>;
}

const axios = Axios.create({
  baseURL: '/api',
  headers: {
    'content-type': 'application/json;charset=utf-8',
  },
  timeout: 8 * 1000,
}) as AxiosInstance2;

function handleError(res: AxiosResponse<any>) {
  if (res.data.detail) {
    ElMessage.error(res.data.detail); // 统一报错
  }
  switch (res.status) {
    case 401:
      router.push({
        name: 'login',
      });
      break;
    case 500:
      ElMessage.error($t(`common.errorTip.${res.status}`));
      break;
    default:
      break;
  }
}

axios.interceptors.request.use((config) => {
  const randNum = Math.random();
  const requestMethod = config.method?.toLowerCase();
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  switch (requestMethod) {
    case 'get':
      // 默认的axios get数组传参后端不支持，改成通用的格式
      config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'repeat' });
    // eslint-disable-next-line no-fallthrough
    case 'delete':
      if (!config.params) {
        config.params = {};
      }
      config.params.randNum = randNum; // 请求增加随机数，避免接口缓存
      break;
    case 'post':
    case 'put':
      if (!config.data) {
        config.data = {};
      }
      config.data.randNum = randNum;
      break;
    default:
      break;
  }

  return config;
});

axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data;
  }
  handleError(res);
  return Promise.reject(res);
}, (err: Error & {
  response: AxiosResponse<any>;
}) => {
  if (err?.message.includes('timeout')) {
    ElMessage.error($t('common.errorTip.timeout'));
  } else if (err?.message.includes('Network Error')) {
    ElMessage.error($t('common.errorTip.network'));
  }
  const res = err.response;
  handleError(res);
  return Promise.reject(res);
  // console.log('message', err.message);
  // console.log('res', err.response);
});

export default axios;
