import polyglotI18nProvider from 'ra-i18n-polyglot';
import {Locale} from 'ra-core';
import defaultMessages from '../i18n/ru';
import log from '../utils/log';
import {ValidationMessages} from '../i18n/types';
import initYupLocale from './initYupLocale';
import {I18nProvider} from './types';

// DO NOT EDIT! THIS IS GENERATED FILE

const locales: Locale[] = [
  {locale: 'en', name: 'English'},
  {locale: 'ru', name: 'Russian'},
];

const i18nProvider: I18nProvider = ({
  ...polyglotI18nProvider(
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
    locales,
    {allowMissing: true}, // turned off notifications about missing keys
  ),
  locales,
});

export default i18nProvider;
