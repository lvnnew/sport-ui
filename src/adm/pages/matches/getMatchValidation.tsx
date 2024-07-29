import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getMatchValidation = () => Yup.object({
  title: Yup.string().required(),
  competitionId: Yup
    .number()
    .required(),
  matchDate: Yup.string().required(),
  matchTime: Yup.string().required(),
  duration: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
  firstTeamPoints: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  secondTeamPoints: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  redCardFirstTeam: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  redCardSecondTeam: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  yellowCardFirstTeam: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  yellowCardSecondTeam: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  firstTeamHandleTime: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
  secondTeamHandleTime: Yup
    .number()
    .integer()
    .max(2147483647)
    .nullable(),
});

export default getMatchValidation;
