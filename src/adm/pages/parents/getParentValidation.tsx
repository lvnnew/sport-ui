import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getParentValidation = () => Yup.object({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
});

export default getParentValidation;
