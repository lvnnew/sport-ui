import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationHistoryEntryValidation: GetValidation = (t: Translate) => Yup.object({
  date: Yup.date().required(t('validation.required')).typeError(t('validation.required')),
  originalEntityType: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  originalEntityId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  autogenerationRuleId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  version: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getAutogenerationHistoryEntryValidation;
