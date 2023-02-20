import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getFileValidation = () => Yup.object({
  originalName: Yup.string().required(),
  url: Yup.string().required(),
  mimetype: Yup.string().required(),
  s3Key: Yup.string().required(),
  eTag: Yup.string().required(),
  bytes: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getFileValidation;
