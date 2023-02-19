import {ValidationMessages} from '../types';

const enValidation: ValidationMessages = {
  minLength: 'Minimum length: %{min}. ',
  maxLength: 'Maximum length: %{max}. ',
  minValue: 'Minimum value: %{min}. ',
  maxValue: 'Maximum value: %{max}. ',
  noSpaces: 'Spaces are not allowed. ',
  noDigits: 'Digits are not allowed. ',
  password: 'Password shall include lowercase and uppercase letters, numbers and special characters. ',
  notFutureDate: 'Choosing a future date is not allowed. ',
  required: 'This field is required. ',
  onlyLatinLetters: 'Only latin letters allowed. ',
  onlyLatinAndCyrillicLetters: 'Only latin and cyrillic letters allowed. ',
  onlyNumbers: 'Only numbers allowed. ',
  onlyLetters: 'Only letters allowed. ',
  exactLength: 'Exact symbols quantity: %{length}. ',
  notPastDate: 'Choosing a past date is not allowed. ',
  onlyIntegers: 'Only integers allowed. ',
  datesInFilter: 'Please, fill in dates in filter. ',
  emailFormat: 'Invalid email format. ',
  onlyLatinAndCyrillicLettersAndDigits: 'Only letters and digits allowed. ',
};

export default enValidation;
