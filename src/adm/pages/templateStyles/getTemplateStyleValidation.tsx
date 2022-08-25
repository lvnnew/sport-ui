import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getTemplateStyleValidation: GetValidation = (t: Translate) => Yup.object({
  title: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  style: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getTemplateStyleValidation;
