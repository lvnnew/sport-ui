import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerCompetitionRatingValidation = () => Yup.object({
  competitionId: Yup
    .number()
    .required(),
  playerId: Yup
    .number()
    .required(),
  rating: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
});

export default getPlayerCompetitionRatingValidation;
