import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getTeamForCompetitionValidation = () => Yup.object({
  title: Yup.string().required(),
  teamId: Yup
    .number()
    .required(),
  competitionId: Yup
    .number()
    .required(),
});

export default getTeamForCompetitionValidation;
