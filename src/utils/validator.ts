/**
 * 验证数据有效性工具
 */

// 校验密码有效性：密码必须包含至少一个小写字母、一个大写字母和一个数字，长度至少八位
export function isValidUserPassowrd(val: string): boolean {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(val);
}
