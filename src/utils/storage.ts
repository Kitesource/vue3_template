/**
 * localStorage, settionStorage等浏览器存储工具
 */

export function setLocal(key:string, val) {
  if (val === undefined || key === undefined) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(val));
}

export function getLocal(key:string) {
  if (!key) {
    return undefined;
  }
  try {
    const str = localStorage.getItem(key);
    if (str) {
      return JSON.parse(str);
    }
    return str;
  } catch {
    return undefined;
  }
}

export function removeLocal(key: string): void {
  if (!key) {
    return;
  }
  localStorage.removeItem(key);
}
