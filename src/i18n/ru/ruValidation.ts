import {ValidationMessages} from '../types';

const ruValidation: ValidationMessages = {
  minLength: 'Mинимальная длина - %{min} символов. ',
  maxLength: 'Максимальная длина - %{max} символов. ',
  minValue: 'Минимальное значение - %{min}. ',
  maxValue: 'Максимальное значение - %{max}. ',
  noSpaces: 'Пробелы запрещены. ',
  noDigits: 'Цифры запрещены. ',
  password: 'Пароль должен содержать строчные и прописные буквы, цифры и спецсимволы. ',
  notFutureDate: 'Выбор будущей даты недопустим. ',
  required: 'Это обязательное поле. ',
  onlyLatinLetters: 'Разрешено использовать только латинские буквы. ',
  onlyLatinAndCyrillicLetters: 'Разрешено использовать только латиницу и кириллицу. ',
  onlyNumbers: 'Разрешено использовать только цифры. ',
  onlyLetters: 'Разрешено использовать только буквы. ',
  onlyIntegers: 'Разрешено использовать только целые числа. ',
  exactLength: 'Точное количество символов: %{length}. ',
  datesInFilter: 'Необходимо заполнить даты в фильтрах. ',
  emailFormat: 'Введите корректный email. ',
  onlyLatinAndCyrillicLettersAndDigits: 'Можно использовать только буквы и цифры. ',
  notPastDate: 'Выбор прошедшей даты недопустим. ',
};

export default ruValidation;
