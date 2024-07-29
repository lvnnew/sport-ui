import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getReportForOrganizationValidation = () => Yup.object({
  title: Yup.string().required(),
  competitionId: Yup
    .number()
    .required(),
  organizatorId: Yup
    .number()
    .required(),
});

export default getReportForOrganizationValidation;
