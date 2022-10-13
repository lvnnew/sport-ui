import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getMailingMessageValidation: GetValidation = (t: Translate) => Yup.object({
  mailingCampaignId: Yup.number().required().typeError(t('validation.required')),
  templateId: Yup.number().required().typeError(t('validation.required')),
  languageId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  to: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  locals: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  localsHash: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  priority: Yup.number().required().typeError(t('validation.required')),
  dateCreated: Yup.date().required(t('validation.required')).typeError(t('validation.required')),
  mailingMessageStatusId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  messageTemplateLangVariantId: Yup.number().required().typeError(t('validation.required')),
});

export default getMailingMessageValidation;
