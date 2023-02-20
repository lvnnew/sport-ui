/* eslint-disable @babel/no-invalid-this */
import * as R from 'ramda';
import * as Yup from 'yup';
import {ValidationMessages} from '../i18n/types';
import {
  noSpace,
  onlyDigits,
  onlyLatinAndCyrillicLetters,
  onlyLatinAndCyrillicLettersAndDigits,
  onlyPositiveDigits,
} from '../utils/regExps';

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
      length: messages.exactLength,
      min: messages.minLength,
      max: messages.maxLength,
      email: messages.emailFormat,
      // url: messages.,
      // lowercase: messages.,
      // uppercase: messages.,
    } as any,
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

  Yup.addMethod(Yup.string, 'onlyLatinAndCyrillicLetters', function () {
    return this.matches(onlyLatinAndCyrillicLetters, messages.onlyLatinAndCyrillicLetters);
  });

  Yup.addMethod(Yup.string, 'onlyLatinAndCyrillicLettersAndDigits', function () {
    return this.matches(onlyLatinAndCyrillicLettersAndDigits, messages.onlyLatinAndCyrillicLettersAndDigits);
  });

  Yup.addMethod(Yup.string, 'onlyPositiveDigits', function () {
    return this.matches(onlyPositiveDigits, messages.onlyNumbers);
  });

  Yup.addMethod(Yup.string, 'noSpaces', function () {
    return this.matches(noSpace, messages.noSpaces);
  });

  Yup.addMethod(Yup.string, 'onlyDigits', function () {
    return this.matches(onlyDigits, messages.onlyNumbers);
  });
};

export default initYupLocale;
