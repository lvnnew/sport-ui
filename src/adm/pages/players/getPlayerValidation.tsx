import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerValidation = () => Yup.object({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  number: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  dateOfBirth: Yup.string().required(),
  age: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  playerRating: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  commonPlayerRatingGoalkeeper: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  commonPlayerRatingAttack: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  commonPlayerRatingMidfielder: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  commonPlayerRatingDefender: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  playedMatches: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getPlayerValidation;
