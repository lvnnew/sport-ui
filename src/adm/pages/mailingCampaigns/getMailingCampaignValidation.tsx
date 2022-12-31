import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getMailingCampaignValidation: GetValidation = (t: Translate) => Yup.object({
  title: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  mailingTypeId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  priority: Yup.number().required(t('validation.required')).typeError(t('validation.required')),
  messageTemplateId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getMailingCampaignValidation;
