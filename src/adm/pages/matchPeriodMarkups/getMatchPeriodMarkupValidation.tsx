import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMatchPeriodMarkupValidation = () => Yup.object({
  timestamp: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  periodTypeId: Yup.string().required(),
});

export default getMatchPeriodMarkupValidation;
