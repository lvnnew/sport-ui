import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerForMatchRequestValidation = () => Yup.object({
  matchRequestId: Yup
    .number()
    .required(),
  playerId: Yup
    .number()
    .required(),
});

export default getPlayerForMatchRequestValidation;
