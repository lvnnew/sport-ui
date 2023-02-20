import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAppLoginValidation = () => Yup.object({
  login: Yup.string().required(),
  passwordHash: Yup.string().required(),
  userId: Yup
    .number()
    .required(),
});

export default getAppLoginValidation;
