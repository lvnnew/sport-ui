import * as Yup from 'yup';
// DO NOT EDIT! THIS IS GENERATED FILE

const getRolesToPermissionValidation = () => Yup.object({
  roleId: Yup.string().required(),
  permissionId: Yup.string().required(),
});

export default getRolesToPermissionValidation;
