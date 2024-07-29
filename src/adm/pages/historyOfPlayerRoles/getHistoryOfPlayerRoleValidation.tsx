import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getHistoryOfPlayerRoleValidation = () => Yup.object({
  matchId: Yup
    .number()
    .required(),
  playerId: Yup
    .number()
    .required(),
  playerRoleId: Yup.string().required(),
  order: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
});

export default getHistoryOfPlayerRoleValidation;
