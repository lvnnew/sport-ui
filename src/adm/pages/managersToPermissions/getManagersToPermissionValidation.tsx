import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getManagersToPermissionValidation = () => Yup.object({
  managerId: Yup
    .number()
    .required(),
  permissionId: Yup.string().required(),
});

export default getManagersToPermissionValidation;
