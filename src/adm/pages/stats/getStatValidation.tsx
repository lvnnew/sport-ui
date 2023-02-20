import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getStatValidation = () => Yup.object({
  id: Yup.string().required(),
  helloCount: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getStatValidation;
