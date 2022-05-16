import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getUserValidation: GetValidation = (t: Translate) => Yup.object({
  lastname: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  firstname: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
  email: Yup.string().required(t('validation.required')).typeError(t('validation.required')),
});

export default getUserValidation;
