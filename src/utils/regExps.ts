export const noDigitsRegExp = /^\D*$/gu;
export const noSpaceRegExp = /^\S*$/gu;
export const onlyLetters = /^[A-Za-zА-яа-яЁ-ё]+$/u;
export const onlyLatinAndRussianLetters = /^[a-zа-яё\s]+$/iu;
export const onlyLatinLetters = /^[A-Za-z]+$/u;
export const onlyDigits = /^\d+$/u;
export const onlyPositiveDigits = /(?<![-.])\b[0-9]+\b(?!\.[0-9])/u;
export const passwordRegExp = /(?=.*[0-9])(?=.*[!?@#$%^&*()_+=-><,./|])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!?@#$%^&*()_+=-><,./|]{6,}/gu;
export const emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/gu;
export const onlyLatinLettersWithSpace = /^[A-Za-z\s]+$/u;
export const onlyLatinAndRussianLettersAndDigits = /^[A-Za-zА-яа-яЁ-ё\d]+$/u;
