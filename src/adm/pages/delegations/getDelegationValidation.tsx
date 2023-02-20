import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getDelegationValidation = () => Yup.object({
  fromId: Yup
    .number()
    .required(),
  toId: Yup
    .number()
    .required(),
});

export default getDelegationValidation;
