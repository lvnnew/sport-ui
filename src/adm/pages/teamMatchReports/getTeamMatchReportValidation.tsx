import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getTeamMatchReportValidation = () => Yup.object({
  created: Yup.date().required(),
  matchId: Yup
    .number()
    .required(),
});

export default getTeamMatchReportValidation;
