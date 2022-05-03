import { createI18n } from 'vue-i18n';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
import enLocale from 'element-plus/lib/locale/lang/en';
import zh from './locale-zh-cn';
import en from './locale-en';

export const languageKey = 'ONE_TEST_LANGUAGE';

/** vue-i18n实例 */
const i18n = createI18n({
  locale: localStorage.getItem('languageKey') || 'zh-cn',
  messages: {
    [zhLocale.name]: {
      el: zhLocale.el,
      ...zh,
    },
    // en
    [enLocale.name]: {
      el: enLocale.el,
      ...en,
    },
  },
});

export default i18n.global.t; // 当做$t使用

export { i18n };
