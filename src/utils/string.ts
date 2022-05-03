// 去除文本换行回车字符
export function replaceCRLF(str: string, replaceStr = '') {
  return str.replace(/\r|\n/g, replaceStr);
}
