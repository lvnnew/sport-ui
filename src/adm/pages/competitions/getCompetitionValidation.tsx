import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getCompetitionValidation = () => Yup.object({
  title: Yup.string().required(),
  dateOfBirthFrom: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  dateOfBirthTo: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  organizationId: Yup
    .number()
    .required(),
});

export default getCompetitionValidation;
