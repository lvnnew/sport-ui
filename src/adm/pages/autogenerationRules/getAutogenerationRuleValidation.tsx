import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationRuleValidation: GetValidation = (t: Translate) => Yup.object({
  title: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  originalEntityType: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  generatingEntityType: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  originalEntityFilter: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  generatingEntityConstructionRules: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getAutogenerationRuleValidation;
