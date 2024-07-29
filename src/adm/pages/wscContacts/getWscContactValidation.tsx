import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getWscContactValidation = () => Yup.object({
  name: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  wscUserId: Yup
    .number()
    .required(),
});

export default getWscContactValidation;
