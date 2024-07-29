import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerForTeamMatchListValidation = () => Yup.object({
  teamMatchListId: Yup
    .number()
    .required(),
  playerId: Yup
    .number()
    .required(),
  playerRoleId: Yup.string().required(),
  playerOnMatchNumber: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getPlayerForTeamMatchListValidation;
