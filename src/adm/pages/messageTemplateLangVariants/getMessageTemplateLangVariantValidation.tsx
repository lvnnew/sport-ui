import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getMessageTemplateLangVariantValidation: GetValidation = (t: Translate) => Yup.object({
  subjectTemplate: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  bodyTemplate: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  messageTemplateId: Yup.number().required().typeError(t('validation.required')),
  languageId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getMessageTemplateLangVariantValidation;
