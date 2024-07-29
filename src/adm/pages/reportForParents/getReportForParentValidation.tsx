import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getReportForParentValidation = () => Yup.object({
  title: Yup.string().required(),
  playerId: Yup
    .number()
    .required(),
  matchId: Yup
    .number()
    .required(),
  parentId: Yup
    .number()
    .required(),
});

export default getReportForParentValidation;
