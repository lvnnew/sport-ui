import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerRoleValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  shortTitle: Yup.string().required(),
  playerAggregatedRoleId: Yup.string().required(),
});

export default getPlayerRoleValidation;
