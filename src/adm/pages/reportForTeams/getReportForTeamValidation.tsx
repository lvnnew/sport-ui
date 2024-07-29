import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getReportForTeamValidation = () => Yup.object({
  created: Yup.date().required(),
  title: Yup.string().required(),
  teamForCompetitionId: Yup
    .number()
    .required(),
  matchId: Yup
    .number()
    .required(),
  clubId: Yup
    .number()
    .required(),
});

export default getReportForTeamValidation;
