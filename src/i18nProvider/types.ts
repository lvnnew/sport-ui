import {I18nProvider as RaI18nProvider, Locale} from 'ra-core';

export interface I18nProvider extends RaI18nProvider {
  locales: Locale[];
}
