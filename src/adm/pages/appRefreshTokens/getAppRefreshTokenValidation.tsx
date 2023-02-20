import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getAppRefreshTokenValidation = () => Yup.object({
  create: Yup.date().required(),
  userId: Yup
    .number()
    .required(),
  token: Yup.string().required(),
});

export default getAppRefreshTokenValidation;
