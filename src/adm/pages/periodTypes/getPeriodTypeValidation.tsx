import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPeriodTypeValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  order: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
});

export default getPeriodTypeValidation;
