import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getTenantValidation = () => Yup.object({
  utcOffset: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
});

export default getTenantValidation;
