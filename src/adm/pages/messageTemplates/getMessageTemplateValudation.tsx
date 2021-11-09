import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getMessageTemplateValudation: GetValidation = (t: Translate) => Yup.object({
  title: Yup.string().required().typeError(t('validation.required')),
});

export default getMessageTemplateValudation;
