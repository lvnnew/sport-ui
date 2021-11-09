import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getRolesToPermissionValudation: GetValidation = (t: Translate) => Yup.object({
  roleId: Yup.string().required().typeError(t('validation.required')),
  permissionId: Yup.string().required().typeError(t('validation.required')),
});

export default getRolesToPermissionValudation;
