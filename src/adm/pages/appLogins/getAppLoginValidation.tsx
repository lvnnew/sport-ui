import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAppLoginValidation: GetValidation = (t: Translate) => Yup.object({
  login: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  passwordHash: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  userId: Yup
    .number()
    .required(t('validation.required'))
    .typeError(t('validation.required')),
});

export default getAppLoginValidation;
