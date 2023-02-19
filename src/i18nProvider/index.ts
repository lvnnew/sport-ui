import polyglotI18nProvider from 'ra-i18n-polyglot';
import defaultMessages from '../i18n/ru';
import log from '../utils/log';
import {ValidationMessages} from '../i18n/types';
import initYupLocale from './initYupLocale';

// DO NOT EDIT! THIS IS GENERATED FILE

const i18nProvider = polyglotI18nProvider(
  locale => {
    switch (locale) {
    case 'en':
      return import('../i18n/en')
        .then(messages => {
          initYupLocale(messages.default.validation as ValidationMessages);

          return messages.default;
        });
    case 'ru':
      initYupLocale(defaultMessages.validation as ValidationMessages);

      return defaultMessages;
    default:
      log.error(`Unknown locale: "${locale}"`);

      initYupLocale(defaultMessages.validation as ValidationMessages);

      return defaultMessages;
    }
  },
  'ru',
  [
    {locale: 'en', name: 'English'},
    {locale: 'ru', name: 'Russian'},
  ],
);

export default i18nProvider;
