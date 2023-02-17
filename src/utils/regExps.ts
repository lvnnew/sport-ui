export const onlyDigits = /^\d+$/iu;
export const onlyPositiveDigits = /(?<![-.])\b[0-9]+\b(?!\.[0-9])/iu;

export const noDigits = /^\D*$/giu;
export const noSpace = /^\S*$/giu;

export const onlyLetters = /^[a-zа-яё\s]+$/iu;
export const onlyLatinLetters = /^[a-z\s]+$/iu;
export const onlyCyrillicLetters = /^[а-яё\s]+$/iu;
export const onlyLatinAndCyrillicLetters = /^[a-zа-яё\s]+$/iu;

export const onlyLettersAndDigits = /^[a-zа-яё\s\d]+$/iu;
export const onlyLatinLettersAndDigits = /^[a-z\s\d]+$/iu;
export const onlyCyrillicLettersAndDigits = /^[а-яё\s\d]+$/iu;
export const onlyLatinAndCyrillicLettersAndDigits = /^[a-zа-яё\s\d]+$/iu;

export const password = /(?=.*[0-9])(?=.*[!?@#$%^&*()_+=-><,./|])(?=.*[a-z])(?=.*[A-Z])[0-9a-z!?@#$%^&*()_+=-><,./|]{6,}/giu;
export const email = /^([a-z0-9_\-.])+@([a-z0-9_\-.])+\.([a-z]{2,4})$/giu;
