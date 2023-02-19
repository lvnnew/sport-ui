import * as R from 'ramda';
import * as Yup from 'yup';
import {ValidationMessages} from '../i18n/types';

const initYupLocale = (validationMessages: ValidationMessages) => {
  const messages = R.fromPairs(
    R
      .toPairs(validationMessages)
      .map(([key, value]) => [key, value.replaceAll('%{', '${')]),
  ) as ValidationMessages;

  Yup.setLocale({
    mixed: {
      notType: messages.required,
      required: messages.required,
    },
    string: {
    // length: messages.,
      min: messages.minLength,
      max: messages.maxLength,
    // email: messages.,
    // url: messages.,
    // lowercase: messages.,
    // uppercase: messages.,
    },
    number: {
      min: messages.minValue,
      max: messages.maxValue,
      // lessThan: messages.,
      // moreThan: messages.,
      // positive: messages.,
      // negative: messages.,
      integer: messages.onlyIntegers,
    },
  // date: {},
  // boolean: {},
  });
};

export default initYupLocale;
