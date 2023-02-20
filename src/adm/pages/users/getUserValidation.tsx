import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getUserValidation = () => Yup.object({
  lastname: Yup.string().required(),
  firstname: Yup.string().required(),
  email: Yup.string().required(),
});

export default getUserValidation;
