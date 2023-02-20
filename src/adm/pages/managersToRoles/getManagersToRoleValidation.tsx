import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getManagersToRoleValidation = () => Yup.object({
  managerId: Yup
    .number()
    .required(),
  roleId: Yup.string().required(),
});

export default getManagersToRoleValidation;
