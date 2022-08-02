import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getMessageTemplateValidation: GetValidation = (t: Translate) => Yup.object({
  id: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  title: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  messageTypeId: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getMessageTemplateValidation;
