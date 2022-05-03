import dayjs from 'dayjs';

/**
 * 格式化时间显示
 * @param date ios字符串
 * @param format 格式化字符串
 */
export function formatDate(date: string | Date, format = 'YYYY-MM-DD HH:mm:ss') {
  return date ? dayjs(date).format(format) : '';
}

/** 单词首字符大写 */
export function capitalize(val: string): string {
  return val && val.length ? val[0].toUpperCase() + val.slice(1) : val;
}

/**
 * toISOString返回的是格林威治时间，+8修正时区
 * @param date 日期对象
 */
export function isoTimeString(date: Date | string): string {
  return dayjs(date).add(8, 'hour').toISOString();
}

export function formatEmpty(val: string, emptyVal = '--'): string {
  return val || emptyVal;
}

/**
 * 小驼峰转snake风格
 * @param str 原字符串
 */
export function camelToSnake<K extends string = string>(str: string): K {
  return str.replace(/([A-Z])/g, (m, p1) => `_${p1.toLowerCase()}`) as K;
}
