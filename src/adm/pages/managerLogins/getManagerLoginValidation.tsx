import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getManagerLoginValidation = () => Yup.object({
  login: Yup.string().required(),
  passwordHash: Yup.string().required(),
  managerId: Yup
    .number()
    .required(),
});

export default getManagerLoginValidation;
