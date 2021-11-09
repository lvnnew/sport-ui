import * as Yup from 'yup';
import GetValidation from '../../../types/GetValidation';
import {Translate} from 'react-admin';

// DO NOT EDIT! THIS IS GENERATED FILE

const getAppLoginValudation: GetValidation = (t: Translate) => Yup.object({
  login: Yup.string().required().typeError(t('validation.required')),
  passwordHash: Yup.string().required().typeError(t('validation.required')),
  userId: Yup.number().required().typeError(t('validation.onlyNumbers')),
});

export default getAppLoginValudation;
