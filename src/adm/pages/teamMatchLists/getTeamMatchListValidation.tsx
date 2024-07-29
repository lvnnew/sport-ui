import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getTeamMatchListValidation = () => Yup.object({
  matchId: Yup
    .number()
    .required(),
  teamForCompetitionId: Yup
    .number()
    .required(),
});

export default getTeamMatchListValidation;
