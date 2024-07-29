import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getWscUserValidation = () => Yup.object({
  login: Yup.string().required(),
  passwordHash: Yup.string().required(),
});

export default getWscUserValidation;
