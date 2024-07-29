import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getEventTypeValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  points: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  order: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getEventTypeValidation;
