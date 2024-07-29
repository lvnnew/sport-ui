import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getTeamValidation = () => Yup.object({
  title: Yup.string().required(),
  dateOfBirthFrom: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  dateOfBirthTo: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  clubId: Yup
    .number()
    .required(),
});

export default getTeamValidation;
