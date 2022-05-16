import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getManagersToPermissionValidation: GetValidation = (t: Translate) => Yup.object({
  managerId: Yup.number().required().typeError(t('validation.required')),
  permissionId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getManagersToPermissionValidation;
