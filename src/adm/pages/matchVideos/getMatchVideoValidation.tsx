import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMatchVideoValidation = () => Yup.object({
  videoTitle: Yup.string().required(),
  videoLink: Yup.string().required(),
  order: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getMatchVideoValidation;
