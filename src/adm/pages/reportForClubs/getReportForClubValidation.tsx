import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getReportForClubValidation = () => Yup.object({
  title: Yup.string().required(),
  teamId: Yup
    .number()
    .required(),
  competitionId: Yup
    .number()
    .required(),
  clubId: Yup
    .number()
    .required(),
});

export default getReportForClubValidation;
