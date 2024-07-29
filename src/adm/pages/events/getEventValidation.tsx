import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getEventValidation = () => Yup.object({
  timeSecond: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  startControversialPoint: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  startHighlight: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  order: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  eventTypeId: Yup.string().required(),
  matchId: Yup
    .number()
    .required(),
  points: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  periodNumber: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getEventValidation;
