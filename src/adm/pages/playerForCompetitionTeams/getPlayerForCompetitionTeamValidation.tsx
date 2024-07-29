import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerForCompetitionTeamValidation = () => Yup.object({
  teamForCompetitionId: Yup
    .number()
    .required(),
  playerId: Yup
    .number()
    .required(),
});

export default getPlayerForCompetitionTeamValidation;
