import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAdmRefreshTokenValidation = () => Yup.object({
  create: Yup.date().required(),
  managerId: Yup
    .number()
    .required(),
  token: Yup.string().required(),
});

export default getAdmRefreshTokenValidation;
