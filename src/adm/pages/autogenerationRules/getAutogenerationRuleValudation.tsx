import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAutogenerationRuleValudation: GetValidation = (t: Translate) => Yup.object({
  title: Yup.string().required().typeError(t('validation.required')),
  originalEntityType: Yup.string().required().typeError(t('validation.required')),
  generatingEntityType: Yup.string().required().typeError(t('validation.required')),
  originalEntityFilter: Yup.string().required().typeError(t('validation.required')),
  generatingEntityConstructionRules: Yup.string().required().typeError(t('validation.required')),
});

export default getAutogenerationRuleValudation;
