import { createI18n } from 'vue-i18n';

import zhChLocale from './zh-ch';
import enLocale from './en.js';

const messages = {
  zhCh: {
    ...zhChLocale
  },
  en: {
    ...enLocale
  }
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'zhCh',
  messages: messages,
  globalInjection: true
})

export default i18n;