import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getTeamForPlayerValidation = () => Yup.object({
  playerId: Yup
    .number()
    .required(),
  teamId: Yup
    .number()
    .required(),
});

export default getTeamForPlayerValidation;
