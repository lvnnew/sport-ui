import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getManagerLoginValidation = () => Yup.object({
  managerLoginTypeId: Yup.string().required(),
  login: Yup.string().required(),
  managerId: Yup
    .number()
    .required(),
});

export default getManagerLoginValidation;
