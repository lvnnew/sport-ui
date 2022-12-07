import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getManagerLoginValidation: GetValidation = (t: Translate) => Yup.object({
  login: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  passwordHash: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  managerId: Yup.number().required().typeError(t('validation.required')),
});

export default getManagerLoginValidation;
