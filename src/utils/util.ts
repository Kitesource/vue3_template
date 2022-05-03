import { getOssSts } from '@/api/oss';
import OSS from 'ali-oss';
import clipboardCopy from 'clipboard-copy';
import { ElMessage } from 'element-plus';
import $t from '@/i18n';

/**
 * 深拷贝对象数据
 * @param data 原数据
 */
export function deepCopy<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export function addSearchKeyword(source: string[], maxLength = 5) {
  return (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    const curVal = target.value.trim();
    console.log(source);
    if (source.length < maxLength + 1 && !source.includes(curVal)) {
      source.push(curVal);
    }
  };
}

export function getOneFilter(val?: string): string[] {
  return val ? [val] : [];
}

/**
 * 上传文件至阿里oss
 * @param file 文件
 */
export async function uploadToOss(file: File) {
  const token = await getOssSts();
  const client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: token.Credentials.AccessKeyId,
    accessKeySecret: token.Credentials.AccessKeySecret,
    stsToken: token.Credentials.SecurityToken,
    bucket: 'onewiki',
  });
  const paths = file.name.split('.');
  const suffix: string = paths[paths.length - 1];
  return client.put(`images/${Date.now()}.${suffix}`, file).catch((err) => {
    console.error('oss上传失败：', err);
  });
}

/**
 * markdown编辑器上传图片钩子
 * @param blob 文件
 * @param callback 成功回调
 */
export function editorUploadImage(blob: File | Blob, callback: (url: string, altText: string) => void) {
  if (!(blob instanceof File)) {
    return;
  }
  uploadToOss(blob).then((res) => {
    if (!res) {
      return;
    }
    callback(res.url, 'image');
  });
}

export const isUrl = (str: string) => /^https?:\/\/.+/.test(str);

function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}
/**
 * 生成随机密码
 * @return {[type]} [description]
 */
export function generateRandomPassword() {
  const source = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const pswLength = random(5, 7);
  let psw = '';

  for (let i = 0; i < pswLength; i += 1) {
    const item = source[random(0, 2)];
    psw += item.charAt(random(0, item.length - 1));
  }

  for (let j = 0; j < 3; j += 1) {
    const charac = source[j].charAt(random(0, source[j].length - 1));
    const randomSplit = random(0, source[j].length - 1);
    psw = [psw.slice(0, randomSplit), charac, psw.slice(randomSplit)].join('');
  }

  return psw;
}

export async function copyText(content: string): Promise<void> {
  try {
    await clipboardCopy(content);

    ElMessage({
      message: $t('common.copySuccess'),
      type: 'success',
    });
  } catch (e) {
    ElMessage({
      message: $t('common.copyFailed'),
      type: 'error',
    });
  }
}

/**
 * 添加千分位分隔符
 * @param val origin value
 * @return value with separator
 */
export function milliFormat(val: number | string) {
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILLI_PATTERN = /(?=(?!\b)(\d{3})+$)/g;
  return val && val.toString().replace(DIGIT_PATTERN, (m) => m.replace(MILLI_PATTERN, ','));
}

export function downloadBlob(blob: Blob, fileName: string) {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = fileName;
  link.style.display = 'none';
  link.href = blobUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(blobUrl);
}

/**
* 字符串的首字母大写
*/
export function firstLetterUpper(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 是否为对象自身属性 key
const { hasOwnProperty } = Object.prototype;
export const hasOwn = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  val: object,
  key: string | symbol,
): key is keyof typeof val => hasOwnProperty.call(val, key);

// 批量更新Orrgin对象数据
export function batchPatchObject<K>(origin: K, target:Partial<K>): void {
  Object.keys(target).forEach((key) => {
    origin[key] = target[key];
  });
}
