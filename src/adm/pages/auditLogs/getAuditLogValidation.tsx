import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAuditLogValidation: GetValidation = (t: Translate) => Yup.object({
  date: Yup.date().required(t('validation.required')).typeError(t('validation.required')),
  title: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  entityTypeId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  entityId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  actionTypeId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getAuditLogValidation;
