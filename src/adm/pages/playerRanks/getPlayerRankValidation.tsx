import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getPlayerRankValidation = () => Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  rating: Yup
    .number()
    .required()
    .integer()
    .max(2147483647),
});

export default getPlayerRankValidation;
