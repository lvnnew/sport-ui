import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getManagerValidation = () => Yup.object({
  lastName: Yup.string().required(),
  firstName: Yup.string().required(),
  email: Yup.string().required(),
});

export default getManagerValidation;
